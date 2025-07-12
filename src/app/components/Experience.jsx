import React from "react";
import styles from "../pages/home.module.css";

export default function Experience() {
  return (
    <>
      <div id="experience" className={styles.experience}>
        {/** The Experience Section */}
        <h2>EXPERIENCE</h2>
        
        {/** Experience tile */}
        <div className={styles.experience_tile}>
          <div className={styles.period}>2020 - 2021</div>
          <div className={styles.work}>
            <h3>Frontend Developer . Stephyfoundations</h3>
            <p>
              Build and maintain components used to construct multiple website's
              frontend. Work closely with cross-functional teams, including
              developers, designers, and product manager, to implement and
              advocate for best practices in web accessibility.
            </p>
            <div className={styles.techstack}>
              <div className={styles.stack}>HTML</div>
              <div className={styles.stack}>CSS</div>
              <div className={styles.stack}>JS</div>
            </div>
          </div>
        </div>

        <div className={styles.experience_tile}>
          <div className={styles.period}>2022 - 2023</div>
          <div className={styles.work}>
            <h3>Backend Developer . Aeprodigy</h3>
            <p>
              Worked on the design and implementation of the database and APIs
              used in the company's apps. Worked closely with other teams
              including system designers, frontend developers and project
              manager to deliver optimal and scalable systems.{" "}
            </p>
            <div className={styles.techstack}>
              <div className={styles.stack}>MongoDB</div>
              <div className={styles.stack}>Express JS</div>
              <div className={styles.stack}>NodeJS</div>
              <div className={styles.stack}>GraphQL</div>
            </div>
          </div>
        </div>

        {/** View Full resume link */}
        <div className={styles.ex_link}>
          <a href="#" id="explore_link" className={styles.explore_link}>
            {" "}
            View Full Resume
          </a>
        </div>
      </div>
    </>
  );
}
