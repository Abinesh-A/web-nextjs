import GoogleLogin from "react-google-login";
import { useSelector } from "react-redux";
import styles from "../styles/Loginpage.module.css";

const GoogleloginComponent = (props) => {
  const state = useSelector((state) => state);
  const logined = (response) => {
    console.log(response);
    props.signinResponse(true, response.profileObj);
  };
  const notlogined = () => {
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
        clientId="653420741518-g15dbrajkgn4mlv513edggigqqn804r1.apps.googleusercontent.com"
      />
    </>
  );
};

export default GoogleloginComponent;
