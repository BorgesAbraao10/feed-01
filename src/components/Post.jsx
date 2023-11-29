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
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galera!</p>
        <p>Esse é meu primeiro projeto com React</p>
        <p>Pode dar uma passadinha lá no meu GitHub para conferir!</p>
        <p>
          <a href="https://github.com/BorgesAbraao10">GitHub</a>
        </p>
        <p>
          <a href="#">#Novoprojeto</a>
        </p>
      </div>
     
    </article>
  );
}
