import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  console.log(props);
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://github.com/BorgesAbraao10.png"
            alt="Abraao Borges - Profile Picture"
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
      <div className={styles.content}></div>

      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea
          id="commentInput"
          name="comment"
          placeholder="Leave your comment"
        />
        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
