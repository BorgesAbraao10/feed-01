import { Post } from "./Post";
import { Header } from "./components/Header";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Abraão Borges"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et obcaecati amet sapiente, velit laborum inventore fuga, ab reprehenderit eum possimus itaque porro! Sapiente, nobis hic libero at quam vel ipsa."
      />

      <Post author="Anna Borges" content="Um novo post" />
    </div>
  );
}
