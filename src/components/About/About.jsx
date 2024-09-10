import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/cip.avif")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                I'm a full Stack Developer with extensive experience in building
                dynamic, responsive web applications using the MERN stack. My
                expertise spans across both front-end and back-end development,
                ensuring seamless integration and efficient performance.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Android Development</h3>
              <p>
                I have extensive experience in developing mobile applications
                using React Native. My expertise lies in building cross-platform
                apps that offer a native-like experience on both iOS and Android
                devices.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Strcuture and Algorithms</h3>
              <p>
                I have a strong foundation in data structures and algorithms,
                with extensive experience in implementing efficient solutions
                using C++ and Java.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
