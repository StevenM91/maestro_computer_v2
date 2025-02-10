"use client";

import styles from "./contact.module.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const textRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_txl4rid",
        "template_e3zgdka",
        {
          from_name: `${formData.name}`,
          from_email: formData.email,
          from_tel: `${formData.tel}`,
          message: formData.message,
        },
        "yU4fF592Eepp46l1e"
      )
      .then(
        () => {
          setStatus("Message envoyé avec succès !");
          setFormData({
            name: "",
            email: "",
            tel: "",
            message: "",
          });
        },
        () => {
          setStatus("Une erreur est survenue. Veuillez réessayer.");
        }
      );
  };

  return (
    <div className={styles.container}>
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 5 }}
      >
        <h1 className={styles.title}>Demandez tout ce que vous avez en tête</h1>
        <h3 className={styles.subtitle}>
          Vous avez des questions ou besoin d&apos;aide ? Remplissez le
          formulaire
          <br />
          ci-dessous et je répondrai dans les plus brefs délais.
        </h3>
        <div className={styles.socials}>
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
        </div>
        <div className={styles.partRight}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="name" className={styles.label}>
              Name :
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
            />
            <label htmlFor="email" className={styles.label}>
              Email :
            </label>
            <input
              type="email"
              placeholder="contact@gmail.com"
              required
              name="email"
              className={styles.input}
              onChange={handleChange}
              value={formData.email}
            />
            <label htmlFor="tel" className={styles.label}>
              Phone :
            </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              placeholder="+33 123456789"
              className={styles.input}
              onChange={handleChange}
              value={formData.tel}
            />
            <p className={styles.p}>Message :</p>
            <textarea
              name="message"
              required
              id=""
              placeholder="Bonjour, je vous contacte pour..."
              className={`${styles.input} ${styles.textarea}`}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button className={styles.button} type="submit">
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
