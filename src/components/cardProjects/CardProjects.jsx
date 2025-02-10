import styles from "./cardProjects.module.css";

const CardProjects = () => {
  return (
    <div className={styles.container}>
      <div class={styles.book}>
        <p>Hello</p>
        <div class={styles.cover}>
          <p className={styles.p}>Hover Me</p>
        </div>
      </div>
      <div class={styles.book}>
        <p>Hello</p>
        <div class={styles.cover}>
          <p className={styles.p}>Hover Me</p>
        </div>
      </div>
      <div class={styles.book}>
        <p>Hello</p>
        <div class={styles.cover}>
          <p className={styles.p}>Hover Me</p>
        </div>
      </div>
      <div class={styles.book}>
        <p>Hello</p>
        <div class={styles.cover}>
          <p className={styles.p}>Hover Me</p>
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
