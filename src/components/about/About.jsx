"use client";

import { motion } from "framer-motion";
import styles from "./about.module.css";
import { useRef } from "react";
import ScrollBasedAnimation from "../ScrollBasedAnimation/ScrollBasedAnimation";

const About = () => {
  const textRef = useRef(null);

  const languages = [
    "HTML5",
    "CSS3",
    "Sass",
    "JavaScript",
    "ReactJs",
    "NextJs",
    "Redux",
    "NodeJs",
    "Express",
    "MongoDB",
    "GitHub",
    "Postman",
    "MySQL",
    "Firebase",
    "TailwindCSS",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.partLeft}>
          <motion.div
            className={styles.card}
            ref={textRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 5 }}
          >
            <p className={styles.desc}>
              Développeur web passionné depuis 2020, je suis constamment à la
              recherche de nouvelles technologies et de défis à relever.
              Autodidacte de nature, j'ai rapidement été séduit par la
              flexibilité et la créativité qu'offre le développement web. Ma
              formation FullStack chez Doranco m'a permis de consolider mes
              bases et d'acquérir une méthodologie rigoureuse. Je suis
              particulièrement attaché à JavaScript et React, langages que je
              maîtrise parfaitement et qui me permettent de créer des interfaces
              utilisateur dynamiques et réactives. Mon objectif est de concevoir
              des applications web intuitives et performantes, en accord avec
              les dernières tendances du marché.
            </p>
          </motion.div>
        </div>
        <div className={styles.partRight}>
          <div className={styles.skills}>
            <div className={styles.skillsTitle}>
              <span className={styles.lineLeft}></span>
              <h3 className={styles.skillsText}>Skills</h3>
              <span className={styles.lineRight}></span>
            </div>
            <div className={styles.skillsList}>
              <ul className={styles.skillsUl}>
                {languages.map((language, index) => (
                  <p key={index} className={styles.skillsItem}>
                    {language}
                  </p>
                ))}
              </ul>
            </div>
          </div>
          <ScrollBasedAnimation />
        </div>
      </div>
    </div>
  );
};

export default About;
