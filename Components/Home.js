import Image from "next/image";
import bg from "C:\\Users\\ELCOT\\Desktop\\Next js project\\web-nextjs\\public\\img\\bg5.jpg";
import icon from "C:\\Users\\ELCOT\\Desktop\\Next js project\\web-nextjs\\public\\img\\icon.jpg";
import { useRouter } from "next/router";
import GoogleLogin from "react-google-login";
import styles from "../styles/Home.module.css";

function Home({ isAunthenticate, setIsAunthenticate }) {
  let history = useRouter();
  const logined = () => {
    setIsAunthenticate(true);
    history.push("/dashboard{IsAunthenticate}");
  };
  const notlogined = () => {
    setIsAunthenticate(false);
    console.log("Failed");
  };

  return (
    <>
      <div className="row">
        <div className="col" style={{ marginTop: "-12%", marginLeft: "5%" }}>
          <Image
            className={styles.bgimg}
            src={bg}
            alt="background pic"
            // height={800}
            // width={600}
            // layout="fixed"
          />
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <div className={styles.signinbtndiv}>
            <h1>HeLLo HOw u Do</h1>
            <GoogleLogin
              isSignedIn={isAunthenticate}
              onSuccess={logined}
              onFailure={notlogined}
              clientId="510258406716-hcdps2qjfkabro5v287ck9477tor4jvb.apps.googleusercontent.com"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
