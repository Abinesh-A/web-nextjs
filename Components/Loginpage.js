import Image from "next/image";
import bg from "../public/img/bg8.jpg";
import { useRouter } from "next/router";
import search from "../public/svgs/svg.js";
import styles from "../styles/Loginpage.module.css";
import GoogleloginComponent from "./GoogleloginComponent";
import { useDispatch } from "react-redux";

function Loginpage() {
  const history = useRouter();
  const dispatch = useDispatch();
  const signinResponse = (success, data) => {
    console.log(success, data);
    dispatch({
      type: "SIGNIN",
      payload: {
        name: data.name,
        email: data.email,
        imageUrl: data.imageUrl,
      },
    });
    history.push("/dashboard");
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.column1}>
          <div className={styles.mainnav}>
            <div style={{ marginLeft: "1%" }}>
            <img src="https://img.icons8.com/plasticine/64/000000/tarot-cards.png"/>
            </div>
            <div className={styles.menu}>
              <div style={{ marginRight: "3rem" }}>
                <p>What</p>
              </div>
              <div style={{ marginRight: "3rem" }}>
                <p>About</p>
              </div>
              <div className={styles.searchicon}>{search("white", "25")}</div>
            </div>
          </div>
          <div className={styles.signindiv}>
            <h1>HeLLo HOw YoU Do.!?</h1>
            <GoogleloginComponent signinResponse={signinResponse} />
          </div>
          <div className={styles.dream}>
            <div className={styles.word1}>
              <span>D</span>
              <span>R</span>
            </div>
            <div className={styles.word2}>
              <span>E</span>
              <span>A</span>
            </div>
            <div className={styles.word3}>
              <span>M</span>
            </div>
          </div>
        </div>
        <div className={styles.bgimg}>
          <Image src={bg} alt="background pic" layout="responsive" />
        </div>
        <div className={styles.column3}>{search("black", "30")}</div>
      </div>
    </>
  );
}

export default Loginpage;
