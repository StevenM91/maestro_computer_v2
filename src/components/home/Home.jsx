"use client";

import styles from "./home.module.css";
import StarryNight from "../starryNight/StarryNight";
import TiltedCard from "../tiltedCard/TiltedCard";
import ShinyText from "../shinyText/ShinyText";
import FadeContent from "../fadeContent/FadeContent";
import Image from "next/image";
import Link from "next/link";
import ContactMe from "../contactMe/ContactMe";
import { useRef } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const textRef = useRef(null);

  return (
    <>
      <div className={styles.container}>
        <StarryNight />
        <div className={styles.content}>
          <TiltedCard
            imageSrc="/images/moi1.webp"
            altText="MAITRE STEVEN"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="350px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            className={styles.img}
          />
          <FadeContent
            blur={true}
            duration={2000}
            easing="ease-out"
            initialOpacity={0}
          >
            <ShinyText
              text="Hey !, I'm Steven Maitre"
              disabled={false}
              speed={3}
              className={styles.title}
            />
          </FadeContent>
          <FadeContent
            blur={true}
            duration={2000}
            easing="ease-out"
            initialOpacity={0}
          >
            <ShinyText
              text="I'm a FullStack Developer"
              disabled={false}
              speed={3}
              className={styles.subtitle}
            />
          </FadeContent>
          <motion.div
            className={styles.contact}
            ref={textRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 5 }}
          >
            <ContactMe />
          </motion.div>
          <motion.div
            className={styles.socials}
            ref={textRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 5 }}
          >
            <Link href="" target="_blank">
              <Image
                src="/logos/insta.webp"
                alt="instagram"
                width={40}
                height={40}
                className={styles.social}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/steven-maitre-98a08817b/"
              target="_blank"
            >
              <Image
                src="/logos/linkedin.webp"
                alt="instagram"
                width={40}
                height={40}
                className={styles.social}
              />
            </Link>
            <Link href="https://github.com/StevenM91" target="_blank">
              <Image
                src="/logos/github.webp"
                alt="instagram"
                width={40}
                height={40}
                className={styles.social}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
