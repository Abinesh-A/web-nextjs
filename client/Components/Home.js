import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { evil, pacman } from "../public/svgs/svg";
import styles from "../styles/Home.module.css";
import Nav from "./Nav";

export default function Home() {
  const state = useSelector((state) => state);
  const router = useRouter();
  const getCurrentDate = (separator = "/") => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${year}`;
  };

  return (
    <>
      <Nav />
      <div className={styles.home}>
        <div className={styles.mains}>
          <div className={styles.column1}>
            <div className={styles.dream}>
              <div className={styles.word1}>
                <span style={{fontWeight:"900"}}>△</span>
                <span>X</span>
              </div>
              <div className={styles.word2}>
                <span>O</span>
                <span style={{fontWeight:"900"}}>▽</span>
              </div>
              <div className={styles.word3}>
                <span style={{fontWeight:"900"}}>▢</span>
              </div>
            </div>
            {/* <div className={styles.maintext}>
            <div className={styles.text}>
              <div className={styles.bigtext}>
                <p>CYBER</p>
                <p>PUNK</p>
              </div>
            </div>
          </div> */}
          </div>
          <div className={styles.column2}>
            <div className={styles.name}>
              <div className={styles.nametext}>
                <h1>Welcome Back {state.data.name}</h1>
              </div>
            </div>
            <div className={styles.date}>
              <span className={styles.xo}>x &lt; x &lt; </span>
              <span>{getCurrentDate()}</span>
              <span style={{ float: "right" }}>
                {pacman()}
                <span className={styles.dot}>* * *</span>
                <span>{evil()}</span>
              </span>
            </div>
            <div className={styles.box}>
              <div className={styles.boxdiv}>
                <div
                  className={styles.boxitem}
                  onClick={() =>
                    state.isAuthenticate
                      ? router.push("/xox")
                      : router.push("/")
                  }
                >
                  XOXOX
                </div>
                <div className={styles.boxitem}>HANDCRICKET</div>
                <div className={styles.boxitem}  onClick={() =>
                    state.isAuthenticate
                      ? router.push("/pacman")
                      : router.push("/")
                  }>PACMAN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
