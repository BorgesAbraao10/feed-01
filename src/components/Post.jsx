import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/BorgesAbraao10.png"
          />

          <div className={styles.authorInfo}>
            <strong>Abraao Borges</strong>
            <span>Web Developer</span>
          </div>
        </div>
      </header>
    </article>
  );
}
