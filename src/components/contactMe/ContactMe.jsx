import Image from "next/image";
import styles from "./contactMe.module.css";
import Link from "next/link";

const ContactMe = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <div className={styles.dots_border}></div>
        <Link href="/#contact">
          <span className={styles.text_button}>
            <Image src="/logos/lettre.webp" width={30} height={30} /> Contact Me
          </span>
        </Link>
      </button>
    </div>
  );
};

export default ContactMe;
