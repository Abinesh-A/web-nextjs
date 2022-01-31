import React from "react";
import { facebook, instagram } from "../public/svgs/svg";
import styles from '../styles/Home.module.css'
export default function Layout({ children }) {
  return <div>{children}
  <div className={styles.footer}>
        <span style={{color:"white"}}><a href="https://www.instagram.com/mr_abinesh_/">{instagram()}</a>mr_abinesh_</span>
        <span style={{color:"white"}}><a href="https://www.facebook.com/mohamed.farhan.7330763/"> {facebook()} </a><a href="https://www.instagram.com/mohamed_farhan1424/">{instagram()}</a>mohamed_farhan1424</span>
      </div>
  </div>;
}
