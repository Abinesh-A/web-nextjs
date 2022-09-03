import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Home.module.css";

function Nav() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    const history = useRouter();
    if (state.isAuthenticate) {
      history.push("/");
    }
  });
  return (
    <div className={styles.homenav}>
      <div className={styles.title}>
        <p>GAMING</p>
        <p style={{ marginTop: "-20%" }}>CLOUD</p>
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
  );
}

export default Nav;
