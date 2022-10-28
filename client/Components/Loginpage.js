import Image from "next/image";
import bg from "../public/img/bg1.jpg";
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
              <img style={{ width:"50px" }} src="data:image/png;base64,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"></img>
              {/* <div>
              <img src="data:image/png;base64,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"></img>
              </div> */}
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
            <span>
              <h1>HeLLo HOw YoU Do.!?</h1>
              <GoogleloginComponent signinResponse={signinResponse} />
            </span>
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
        <div className={styles.column3}>
        {search("black", "25")}
          {/* <img src="data:image/png;base64,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"></img> */}
        </div>
      </div>
    </>
  );
}

export default Loginpage;
