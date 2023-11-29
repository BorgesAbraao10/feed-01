import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1682124710157-d1573373a4f5?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/BorgesAbraao10.png"
        />

        <strong>Abraão Borges</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine />
          Edit Profile
        </a>
      </footer>
    </aside>
  );
}
