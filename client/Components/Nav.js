import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Home.module.css";

function Nav() {
  const dispatch = useDispatch();
  const history = useRouter();
  const state = useSelector((state) => state);
  useEffect(() => {
    if (!state.isAuthenticate) {
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
          {/* <img
            onClick={() => dispatch({ type: "SIGNOUT" })}
            src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/30/000000/external-logout-screen-from-the-working-portfolio-of-a-user-classic-regular-tal-revivo.png"
          /> */}
          <img onClick={() => dispatch({ type: "SIGNOUT" })} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACMUlEQVRIia2VTYhNYRjHf8/MZGiGGEmTBlkOi1mwYafEgiQpxkYUOwk1GpqNlbIkpVgISdNMRilEsdDIQr4i5SPFYKFJhswwP4v73ua4c+9xXf51et+ej///PO/znucEVUCtA9qARuBVRIxVk1cNcYPapb5zAp/VY+rMfyWvVy8l0mvqdnWrelr9qT5VZ/+LwL5E3lXGt0odUy/USh7qa/WmGhVijqRKWvO46irY5wALgL6IsEJMb8pfWotAfVrzbkvRV58TU1HgQ3pW5+SuSeuDPIGKUA+nJm8u41uiflGv1kSeSKapg+q4elJdqS5Xe9QRdUhdWLNAEmlSj6vfMx/auHpZnV8NR9krWEZoBtABTAUeAR+B3cB6oBn4CTwGeiLibS3FlAoeTNXcVi+q/eqwer3qCtR6oB1YDLQCDyPiRvI9AV5GxLpMfCswPSKe573ZVHWL2peGWhZnM3FD6oky+WvUyVc7Tc0D6vtE9iZNzE61PfUgG19J4JT6Q+0s2hrS2gMcAq4AR4FbOSMiS9gM7KfQfIARQOCM+i0i+osCy4B7EbH2T6QlmAvsAJoytrr0rAD6s6Ni/C/JiYgXEdEWES0R0QLspXBxBoDuotr/RAdwHtgUEaMw0QMz+2owCkwpNUbEnlJbkfQ+0K1+yiHtjYidaX8X2KAOAsMUTmIj8DUitv0mCqA2AjuBeTkCdyJiIMW3UTjnjox/BNgVEecmCdQKdREwi8LP51nx3LP4BYQ7mL9x25J9AAAAAElFTkSuQmCC"></img>
        </div>
      </div>
    </div>
  );
}

export default Nav;
