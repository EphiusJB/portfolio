import React from "react";
import styles from "../pages/home.module.css";

export default function About() {
  return (
    <>
      <div id="about" className={styles.about}>
        <h3>ABOUT</h3>
        <p>
          I'm a developer Who is passionate about crafting dynamic web
          applications and creating seamless user experiences. With a strong
          foundation in both front-end and back-end technologies, I thrive on
          transforming innovative ideas into reality.
        </p>
        <p>
          Over the past 4 years, I've honed my skills in a variety of
          programming languages and frameworks, including HTML, CSS, JavaScript,
          React, Node.js, Express, and MongoDB. My expertise lies in designing
          and implementing scalable, high-performance applications that meet and
          exceed client expectations.
        </p>
        <p>
          When I'm not coding, you can find me gaming, playing chess, and
          constantly seeking new ways to innovate and stay ahead of industry
          trends. I'm always eager to learn and grow, and I believe that
          continuous improvement is key to success in the ever-evolving world of
          technology.
        </p>
      </div>
    </>
  );
}
