const mongoose = require("mongoose");
const redis = require("redis");
const util = require("util");

const client = redis.createClient({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
  retry_strategy: () => 1000,
});

client.hget = util.promisify(client.hget);

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function (options = { time: 60 }) {
  this.enableCache = true;
  this.time = options.time;
  //this.hashKey = JSON.stringify(options.key || "default");
  this.hashKey = JSON.stringify(options.key || this.mongooseCollection.name);
  return this;
};

mongoose.Query.prototype.exec = async function () {
  if (!this.enableCache) {
    console.log("Data Source: Database");
    return exec.apply(this, arguments);
  }

  const key = JSON.stringify(
    Object.assign({}, this.getQuery(), {
      collection: this.mongooseCollection.name,
    })
  );

  const cachedValue = await client.hget(this.hashKey, key);

  if (cachedValue) {
    const parsedCache = JSON.parse(cachedValue);
    console.log("Data Source: Cache");
    return Array.isArray(parsedCache)
      ? parsedCache.map((doc) => new this.model(doc))
      : new this.model(parsedCache);
  }

  const result = await exec.apply(this, arguments);

  client.hset(this.hashKey, key, JSON.stringify(result));

  console.log("Data Source: Database");
  return result;
};

const clearCache = (hashKey) => {
  console.log("Cache cleaned");
  client.del(JSON.stringify(hashKey));
};
module.exports = clearCache;
