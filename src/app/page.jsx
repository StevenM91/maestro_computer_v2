import About from "@/components/about/About";
import styles from "./page.module.css";
import Projects from "@/components/project/Projects";
import Contact from "@/components/contact/Contact";
import Home from "@/components/home/Home";
import Copyright from "@/components/copyright/Copyright";

const Page = () => {
  return (
    <div className={styles.container}>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="project">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Copyright />
    </div>
  );
};

export default Page;
