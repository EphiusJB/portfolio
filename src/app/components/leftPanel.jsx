"use client"
import React, { useState } from "react";
import styles from "../pages/home.module.css";
import {Github, LucideLinkedin, Twitter, Facebook} from "lucide-react"

export default function LeftPanel() {
    const [isActive, setIsActive] = useState("About");
  return (
    <>
      <div className={styles.left}>
        {/** The Introduction Section */}
        <div className={styles.intro}>
          <h1>Ephius Mutambo</h1>
          <h3>Full Stack Developer</h3>
          <p>
            I specialise in frontend and backend development for complex
            scalable web apps
          </p>
        </div>

        {/** The Navigation Menu */}
        <div className={styles.menu}>
          <a href="#about" className={isActive === "About" ? styles.menu_item : styles.menu_item_active} onClick={()=>setIsActive("About")}>
            <span className={styles.span}></span> <p>ABOUT</p>
          </a>
          <a href="#experience" className={styles.menu_item}>
            <span className={styles.span}></span> <p>EXPERIENCE</p>
          </a>
          <a href="#project" className={styles.menu_item}>
            <span className={styles.span}></span> <p>PROJECTS</p>
          </a>
        </div>

        {/** The social links at the Bottom */}
        <div className={styles.links}>
          <a href="#" className={styles.social}>
            <Github />
          </a>
          <a href="#" className={styles.social}>
            <LucideLinkedin />
          </a>
          <a href="#" className={styles.social}>
            <Facebook />
          </a>
          <a href="#" className={styles.social}>
            <Twitter />
          </a>
        </div>
      </div>
    </>
  );
}
