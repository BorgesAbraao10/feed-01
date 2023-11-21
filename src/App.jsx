import { Post } from "./Post";


export function App() {
  return (
    <div>
      <Post
        author="Abraão Borges"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et obcaecati amet sapiente, velit laborum inventore fuga, ab reprehenderit eum possimus itaque porro! Sapiente, nobis hic libero at quam vel ipsa."
      />

      <Post author="Anna Borges" content="Um novo post" />
    </div>
  );
}
