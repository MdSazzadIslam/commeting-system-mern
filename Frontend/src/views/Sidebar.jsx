import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row content">
          <div className="col-sm-3 sidenav">
            <h4>John's Blog</h4>
            <ul className="nav nav-pills nav-stacked">
              <li className="active">
                <a href="#section1">Home</a>
              </li>
              <li>
                <a href="#section2">Friends</a>
              </li>
              <li>
                <a href="#section3">Family</a>
              </li>
              <li>
                <a href="#section3">Photos</a>
              </li>
            </ul>
            <br />
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search Blog.."
              />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">
                  <span className="glyphicon glyphicon-search" />
                </button>
              </span>
            </div>
          </div>
          <div className="col-sm-9">
            <h4>
              <small>RECENT POSTS</small>
            </h4>
            <hr />
            <h2>I Love Food</h2>
            <h5>
              <span className="glyphicon glyphicon-time" /> Post by Jane Dane,
              Sep 27, 2015.
            </h5>
            <h5>
              <span className="label label-danger">Food</span>{" "}
              <span className="label label-primary">Ipsum</span>
            </h5>
            <br />
            <p>
              Food is my passion. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <br />
            <br />
            <h4>
              <small>RECENT POSTS</small>
            </h4>
            <hr />
            <h2>Officially Blogging</h2>
            <h5>
              <span className="glyphicon glyphicon-time" /> Post by John Doe,
              Sep 24, 2015.
            </h5>
            <h5>
              <span className="label label-success">Lorem</span>
            </h5>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <hr />
            <h4>Leave a Comment:</h4>
            <form>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows={3}
                  required
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
            <br />
            <br />
            <p>
              <span className="badge">2</span> Comments:
            </p>
            <br />
            <div className="row">
              <div className="col-sm-2 text-center">
                <img
                  src="bandmember.jpg"
                  className="img-circle"
                  height={65}
                  width={65}
                  alt="Avatar"
                />
              </div>
              <div className="col-sm-10">
                <h4>
                  Anja <small>Sep 29, 2015, 9:12 PM</small>
                </h4>
                <p>
                  Keep up the GREAT work! I am cheering for you!! Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <br />
              </div>
              <div className="col-sm-2 text-center">
                <img
                  src="bird.jpg"
                  className="img-circle"
                  height={65}
                  width={65}
                  alt="Avatar"
                />
              </div>
              <div className="col-sm-10">
                <h4>
                  John Row <small>Sep 25, 2015, 8:25 PM</small>
                </h4>
                <p>
                  I am so happy for you man! Finally. I am looking forward to
                  read about your trendy life. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
                <br />
                <p>
                  <span className="badge">1</span> Comment:
                </p>
                <br />
                <div className="row">
                  <div className="col-sm-2 text-center">
                    <img
                      src="bird.jpg"
                      className="img-circle"
                      height={65}
                      width={65}
                      alt="Avatar"
                    />
                  </div>
                  <div className="col-xs-10">
                    <h4>
                      Nested Bro <small>Sep 25, 2015, 8:28 PM</small>
                    </h4>
                    <p>Me too! WOW!</p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="container-fluid">
        <p>Footer Text</p>
      </footer>
    </div>
  );
};

export default Sidebar;
