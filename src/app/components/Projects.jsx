import React from "react";
import styles from "../pages/home.module.css";

export default function Projects() {
  return (
    <>
      <div id="project" className={styles.project}>
        {/** The projects  section*/}
        <h2>PROJECTS</h2>

        {/** Projsect tile */}
        <div className={styles.project_tile}>
          <div className={styles.project_image}></div>
          <div className={styles.work}>
            <h3>TBU</h3>
            <p>
              The information for this project is still being processed and will
              be available soon together with the project name
            </p>
            <div className={styles.techstack}>
              <div className={styles.stack}>HTML</div>
              <div className={styles.stack}>CSS</div>
              <div className={styles.stack}>JS</div>
            </div>
          </div>
        </div>

        {/** View project archive link */}
        <div className={styles.ex_link}>
          <a href="#" id="explore_link" className={styles.explore_link}>
            {" "}
            View Full Project Archieve
          </a>
        </div>
      </div>
    </>
  );
}
