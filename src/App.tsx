import React, { useState } from "react";
import "./App.css";
import { ColorSelector } from "./components/ColorSelector";
import PostList from "./components/PostList";
import { TodoList } from "./components/TodoList";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="container">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <TodoList></TodoList>}

      <PostList></PostList>
      <ColorSelector></ColorSelector>
    </div>
  );
}

export default App;
