import React, { useState } from "react";
import "./main.css";

import svg from "../../Assets/main.svg";

// import {GoogleLogin} from "react-google-login";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
// import Carousel from "../Carousel/Carousel"
import Carjs from "../Carjs/Carjs";

// import Embedded from "../VideoEmbedded/Embedded"
import Embedded from "../VideoEmbedded/Embedded";

// const clientId = "1087625441215-mb8j4hu473ikkj38f1dbor0puardfjj6.apps.googleusercontent.com";

const Main = () => {
  const [stateAuth, setStateAuth] = useState();
  const response = (res) => {
    setStateAuth(res);
  };

  return (
    <>
    <div className="Home">
      <div className="left_main">
        {!stateAuth ? 
        (
          <div className="leftHeadCont">
            <div className="header_wlcm">
              <h2>Welcome to your proffesional community</h2>
            </div>
            <div className="idInput">
              <span className="inputLabel">
                <label>Email or phone</label>
              </span>
              <span className="typeInput">
                <input type="email" style={{ padding: "12px" }} />
              </span>
              <span className="inputLabel">
                <label>Password</label>
              </span>
              <span className="typeInput">
                
                <input type="password" style={{ padding: "12px" }} />
                
              </span>
              <span className="frgtPwd">
                <a href="#">Forgot password?</a>
              </span>
              <button className="sbmtContainer">Sign in</button>
            </div>
            <div className="google_signIn">
              <div className="divider">
                <p>or</p>
              </div>
              <button className="btnGoogleBtn">
                <Login response = {response}/>
              </button>
              <div className="newBtnUser">
                <button className="newUser">New to LinkedIn? Join Now</button>
              </div>
            </div>
          </div>
        ) 
        : 
        (
          <>
          <div>
            <div className="leftHeadCont">
              <div className="header_wlcm">
                <h2 style = {{marginTop:'5%'}}>Welcome to your proffesional community,</h2>
                <h3>{stateAuth.profileObj.name}</h3>
              </div>
              <button className="logOutBtn">
                <Logout response = {response}/>
              </button>
            </div>
          </div>
          </>
          
        )}
      </div>
      <div className="right_main">
        <img src={svg} alt="" className="svgMain" />
      </div>

      

    </div>
      {!stateAuth ? 
        null 
        :
        <>
        <div className="CarouselCont">
            <Carjs/>
        </div>
        <div className="CarouselCont2">
          <Embedded/>
        </div>
        </>
      }
    </>
  );
};

export default Main;
