
import GoogleLogin from "react-google-login";
import { useSelector } from "react-redux";

function GoogleloginComponent(props) {
    const state=useSelector(state=>state);
    const logined=(response)=>{
       props.signInResponse(true,response.data)
    }
    const notlogined=()=>{
        props.signInResponse(false,null)
    }
    return (
        <div>
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
              clientId="510258406716-hcdps2qjfkabro5v287ck9477tor4jvb.apps.googleusercontent.com"
            />
        </div>
    )
}

export default GoogleloginComponent
