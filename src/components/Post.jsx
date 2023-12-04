import { Comment } from "./Comment";
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

        <time title="27 de Novembro às 18:25" dateTime="2023-11-27 18:25">
          Publishead at 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Hey guys</p>
        <p>This is my first project with React</p>
        <p>You can go to my GitHub to check it out</p>
        <p>
          <a href="https://github.com/BorgesAbraao10">GitHub</a>
        </p>
        <p>
          <a href="#">#New project</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea placeholder="Leave your comment" />
        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  );
}
