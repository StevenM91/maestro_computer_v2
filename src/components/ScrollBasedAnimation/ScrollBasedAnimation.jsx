import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ScrollBasedAnimation.module.css";

const ScrollBasedAnimation = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -300]);

  const logos = [
    { name: "JavaScript", src: "/logos/js.webp" },
    { name: "ReactJS", src: "/logos/react.webp" },
    { name: "NextJS", src: "/logos/nextJs.webp" },
    { name: "CSS", src: "/logos/css.webp" },
    { name: "SASS", src: "/logos/sass.webp" },
    { name: "express", src: "/logos//express.webp" },
    { name: "mongoDB", src: "/logos/mongodb.webp" },
    { name: "mySql", src: "/logos/mysql.webp" },
  ];

  return (
    <motion.div
      className={styles.container}
      initial={{ x: "100%" }}
      animate={{ x: "-100%" }}
      transition={{
        duration: 30, // Durée de l'animation du texte
        repeat: Infinity, // Défilement infini
        ease: "linear", // Vitesse constante
      }}
    >
      <div className={styles.scrollingContent}>
        {logos.map((logo, index) => (
          <div key={index} className={styles.item}>
            <img
              src={logo.src}
              alt={logo.name}
              fill="true"
              className={styles.logo}
            />
            <span>{logo.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ScrollBasedAnimation;
