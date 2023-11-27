import { Post } from "./components/Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Abraão Borges"
            content="Olá! Sou um entusiasta da tecnologia em transição de carreira, apaixonado por programação e pela arte de transformar problemas complexos em soluções criativas. Cada linha de código que escrevo é um passo em direção a um futuro onde a inovação e a resolução de desafios andam de mãos dadas. Estou ansioso para aplicar meu conhecimento e criar um impacto positivo por meio da tecnologia.👨‍💻"
          />

          <Post author="Anna Borges" content="Um novo post" />
        </main>
      </div>
    </div>
  );
}
