import styles from "./Header.module.css";

import igniteLogo from "../assest/ignite-logo.svg";
export function Header() {
  return (
    <header className={styles.header}>
      <strong>Ignite Feed</strong>
    </header>
  );
}
