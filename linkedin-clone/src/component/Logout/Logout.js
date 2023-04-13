import React from 'react'
import {GoogleLogout} from 'react-google-login'

const Logout = (props) => {
    const clientId = "1087625441215-mb8j4hu473ikkj38f1dbor0puardfjj6.apps.googleusercontent.com";

    const logout = ()=>{
        console.log('Logout successfully');
        props.response();
    }
  return (
    <div>
      <GoogleLogout
          clientID = {clientId}
          buttonText='Logout'
          onLogoutSuccess = {logout}
      ></GoogleLogout>
    </div>
  )
}

export default Logout
