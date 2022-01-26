import { useDispatch } from "react-redux";
import styles from "../styles/Home.module.css";

export default function Home({ state }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.homenav}>
        <div>
          <h4>Coding Dreams</h4>
        </div>
        <div>
          <div className={styles.profiledrop}>
            <img className={styles.dropbtn} src={state.data.imageUrl}></img>

            <div className={styles.dropdowncontent}>
              <button onClick={() => dispatch({ type: "SIGNOUT" })}>
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1>HEllo Signed in successfully</h1>
      <h1>Name: {state.data.name}</h1>
      <h1>Email: {state.data.email}</h1>
    </>
  );
}
