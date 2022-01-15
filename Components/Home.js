
import { useRouter } from "next/router";
import GoogleLogin from "react-google-login"



function Home({isAunthenticate,setIsAunthenticate}) {
    let history=useRouter();
    const logined=()=>{
        setIsAunthenticate(true);
        history.push('/dashboard')
    }
    const notlogined=()=>{
        setIsAunthenticate(false)
        console.log("Failed");
    }
    
    return (
        <div>
            <h1>HeLLo HOw u Do</h1>
            <GoogleLogin isSignedIn={isAunthenticate} onSuccess={logined} onFailure={notlogined} clientId="510258406716-hcdps2qjfkabro5v287ck9477tor4jvb.apps.googleusercontent.com"/>
        </div>
    )
}

export default Home
