"use client";

import Link from "next/link";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="#home" className={styles.link}>
            Home
          </Link>
          <Link href="#about" className={styles.link}>
            About
          </Link>
          <Link href="#project" className={styles.link}>
            Project
          </Link>
          <Link href="#contact" className={styles.link}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
