class storage {
  static getLocalStorage = () => {
    debugger;
    let token = JSON.parse(localStorage.getItem("user"));
    if (token) {
      return JSON.parse(localStorage.getItem("user"))["token"];
    }
  };
}
export default storage;
