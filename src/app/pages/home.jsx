import About from "../components/About";
import Cursor from "../components/cursor";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import LeftPanel from "../components/leftPanel";
import Projects from "../components/Projects";
import styles from "./home.module.css";

export default function Landing(props) {
  return (
    <div className="body">
      <Cursor />
      <main className={styles.main}>
        <LeftPanel />
        <div className={styles.ghost}></div>

        <div className={styles.right}>
          <About />

          <Experience />

          <Projects />

          <Footer />
        </div>
      </main>
    </div>
  );
}
