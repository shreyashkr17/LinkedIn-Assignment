import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login'
import {gapi} from "gapi-script"

import "./login.css"




const Login = (props) => {
    const clientId = "1087625441215-mb8j4hu473ikkj38f1dbor0puardfjj6.apps.googleusercontent.com";

    useEffect(()=>{
        gapi.load("client:auth2",()=>{
            gapi.auth2.init({clientId:clientId})
        })
    },[])

    const responseGoogle = (response)=>{
        console.log(response);
        props.response(response)
    };
  return (
    <div>
      <GoogleLogin
          clientId = {clientId}
          buttonText = "Sign in with Google"
          onSuccess={responseGoogle}
          onFailure = {responseGoogle}
          cookiePolicy={'single_host_origin'}
          className='loginGoogle'
      />
    </div>
  )
}

export default Login
