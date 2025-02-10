import CardProjects from "../cardProjects/CardProjects";
import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      <CardProjects />
    </div>
  );
};

export default Projects;
