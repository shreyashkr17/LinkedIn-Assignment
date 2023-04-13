import React from "react";
import "./navbar.css";
import logo from "../../Assets/LinkedIn-logo.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="nav_container">
        <div className="home_linkedin">
          <a href="#">
            <img src={logo} alt="" className="logo" />
          </a>
        </div>
        <ul className="list_menu">
          <a href="#" className="explore1">
            <div className="innerLi">
              <icon className="upper_1">
                <svg
                  style={{ margin: "auto" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  fill="none"
                  focusable="false"
                  class="lazy-loaded"
                  aria-busy="false"
                >
                  <path
                    d="M18.07 2.93A10 10 0 1 0 3.926 17.07 10 10 0 0 0 18.07 2.93ZM5.34 15.66A8 8 0 1 1 16.66 4.353 8 8 0 0 1 5.34 15.66ZM9 8l-3 7a7 7 0 1 1 9.9-9.9L9 8Zm1.12 2.88a1.24 1.24 0 1 1 1.76-1.747 1.24 1.24 0 0 1-1.76 1.747ZM15.95 15A7 7 0 0 1 6 15l7-3 2.95-6.95a7 7 0 0 1 0 9.95Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </icon>
              <div className="down1">
                <span className="liText">Discover</span>
              </div>
            </div>
          </a>
          <a href="#" className="explore1">
            <div className="innerLi">
              <icon className="upper_1">
                <svg
                  style={{ margin: "auto" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="20"
                  fill="none"
                  focusable="false"
                  class="lazy-loaded"
                  aria-busy="false"
                >
                  <path
                    d="M9 14v6H0v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3Zm5.5-3c1.9 0 3.5-1.6 3.5-3.5S16.4 4 14.5 4 11 5.6 11 7.5s1.6 3.5 3.5 3.5Zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5V20h7v-4.5c0-1.4-1.1-2.5-2.5-2.5ZM4.5 0C2 0 0 2 0 4.5S2 9 4.5 9 9 7 9 4.5 7 0 4.5 0Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </icon>
              <div className="down1">
                <span className="liText">People</span>
              </div>
            </div>
          </a>
          <a href="#" className="explore1">
            <div className="innerLi">
              <icon className="upper_1">
                <svg
                  style={{ margin: "auto" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  focusable="false"
                  class="lazy-loaded"
                  aria-busy="false"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23 3H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM2 19h20V5H2v14Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 9h6V7H4v2Zm0 4h6v-2H4v2Zm0 4h6v-2H4v2Zm-2 2h10V5H2v14Z"
                    fill="currentColor"
                    fill-opacity=".25"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 9h6V7h-6v2Zm0 4h6v-2h-6v2Zm6 4h-6v-2h6v2Z"
                    fill="currentColor"
                    fill-opacity=".6"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 7.534v8.933a.28.28 0 0 0 .439.23l6.433-4.436A.307.307 0 0 0 17 12a.305.305 0 0 0-.128-.26l-6.433-4.437a.28.28 0 0 0-.439.23Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </icon>
              <div className="down1">
                <span className="liText">Learning</span>
              </div>
            </div>
          </a>
          <a href="#" className="explore1">
            <div className="innerLi">
              <icon className="upper_1">
                <svg
                  style={{ margin: "auto" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  fill="none"
                  focusable="false"
                  class="lazy-loaded"
                  aria-busy="false"
                >
                  <path
                    d="M15 4V3c0-1.7-1.3-3-3-3H8C6.3 0 5 1.3 5 3v1H0v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V4h-5ZM7 3c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H7V3Zm10 9c1.2 0 2.3-.5 3-1.4V15c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3v-4.4c.7.9 1.8 1.4 3 1.4h14Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </icon>
              <div className="down1">
                <span className="liText">Jobs</span>
              </div>
            </div>
          </a>
        </ul>
        <div className="join_in">
            <div className="join_cont1">
                <a href="#" className="jn">
                    <span className="jnText">Join now</span>
                </a>
            </div>
            <div className="join_cont2">
                <a href="#" className="jn1">
                    <span className="jnText">Sign in</span>
                </a>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
