import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author }) {
  // Corrigido aqui
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
            alt="Abraao Borges - Profile Picture"
          />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span> 
          </div>
        </div>

        <time title="27 de Novembro às 18:25" dateTime="2023-11-27 18:25">
          Published at 1h
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
