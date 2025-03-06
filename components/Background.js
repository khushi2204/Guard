import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Background() {
  useEffect(() => {
    const bgAnimation = document.getElementById("bgAnimation");
    if (bgAnimation) {
      for (let i = 0; i < 400; i++) {
        const colorBox = document.createElement("div");
        colorBox.classList.add(styles.colorBox);
        bgAnimation.append(colorBox);
      }
    }
  }, []);

  return (
    <div className={styles.bgWrapper}>
      <div className={styles.bgAnimation} id="bgAnimation"></div>
      <div className={styles.backgroundAmim}></div>
    </div>
  );
}
