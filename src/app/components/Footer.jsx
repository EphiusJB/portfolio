import React from "react";
import styles from "../pages/home.module.css";

export default function Footer() {
  return (
    <>
      <footer>
        <p className={styles.footer}>
          Loosely designed in <a href="https://www.lunacy.com">Lunacy</a> and
          coded in{" "}
          <a href="https://code.visualstudio.com">Visual Studio Code</a> by
          yours truly. Built with React and deployed with <a>Vercel</a>. All
          text is set in the <a href="https://rsms.me/inter/">Inter</a>{" "}
          typeface.
        </p>
      </footer>
    </>
  );
}
