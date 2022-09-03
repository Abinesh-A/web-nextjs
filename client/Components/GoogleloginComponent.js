// import { gapi } from "gapi-script";
// import { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useSelector } from "react-redux";
import styles from "../styles/Loginpage.module.css";

const GoogleloginComponent = (props) => {
  const dontenv = require("../dotenv");
  dontenv.config();

  const state = useSelector((state) => state);
  // useEffect(()=>{
  //   gapi.load("client:auth2",()=>{
  //     gapi.auth2.init({clientId:"326867438574-fjbedp8rse7jpf9i4kg16vikjug3v9u5.apps.googleusercontent.com"})
  //   })
  // })
  console.log(state.isAuthenticate);
  const logined = (response) => {
    console.log(response);
    props.signinResponse(true, response.profileObj);
  };
  const notlogined = (response) => {
    console.log(response);
    props.signinResponse(false, null);
  };
  return (
    <>
      <GoogleLogin
        render={(renderProps) => (
          <div>
            <img src="https://img.icons8.com/color/40/000000/google-logo.png" />
            <button
              className={styles.signinbtn}
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Login
            </button>
          </div>
        )}
        // buttonText="Login"
        isSignedIn={state.isAuthenticate}
        onSuccess={logined}
        onFailure={notlogined}
        cookiePolicy={"single_host_origin"}
        clientId={process.env.clientId}
        // clientId="510258406716-hcdps2qjfkabro5v287ck9477tor4jvb.apps.googleusercontent.com"
        // clientId="326867438574-fjbedp8rse7jpf9i4kg16vikjug3v9u5.apps.googleusercontent.com"
      />
    </>
  );
};

export default GoogleloginComponent;
