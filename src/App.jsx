import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// author: { avatar_url: "", name: "", role: "" }
// publisheadAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/BorgesAbraao10.png",
      name: "Abraão Borges",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Hey guys," },
      { type: "paragraph", content: "This is my first project with React," },
      {
        type: "paragraph",
        content: "You can go to my GitHub to check it out,",
      },
      { type: "link", content: "jane.desine/doctorcare" },
    ],
    publishedAt: new Date("2023-12-15 13:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Anadev01.png",
      name: "Ana Borges",
      role: "Estudante de programação",
    },
    content: [
      { type: "paragraph", content: "Hey guys," },
      { type: "paragraph", content: "This is my first project with React," },
      {
        type: "paragraph",
        content: "You can go to my GitHub to check it out,",
      },
      { type: "link", content: "jane.desine/doctorcare" },
    ],
    publishedAt: new Date("2023-12-17 13:00:00"),
  },
];

// Iteração

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
