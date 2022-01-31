import { useDispatch } from "react-redux";
import { evil, pacman } from "../public/svgs/svg";
import styles from "../styles/Home.module.css";

export default function Home({ state }) {
  const dispatch = useDispatch();
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
    <div className={styles.home}>
      <div className={styles.homenav}>
        <div className={styles.title}>
          <p>CLOUD</p>
          <p style={{ marginTop: "-20%" }}>GAMING</p>
        </div>
        <div className={styles.menu}>
          <div className={styles.profilepic}>
            <img className={styles.profilebtn} src={state.data.imageUrl}></img>
          </div>
          <div style={{ cursor: "pointer" }}>
            <img
              onClick={() => dispatch({ type: "SIGNOUT" })}
              src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/30/000000/external-logout-screen-from-the-working-portfolio-of-a-user-classic-regular-tal-revivo.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.mains}>
        <div className={styles.column1}>
          <div className={styles.maintext}>
            <div className={styles.text}>
              <div className={styles.bigtext}>
                <p>CYBER</p>
                <p>PUNK</p>
              </div>
            </div>
          </div>
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
            <div className={styles.boxitem}>XOXOX</div>
            <div className={styles.boxitem}>HANDCRICKET</div>
            <div className={styles.boxitem}>PACMAN</div>
          </div>
        </div>
      </div>
    </div>
  );
}
