import React, { useState, createContext } from "react";
import "./App.css";
import { ColorSelector } from "./components/ColorSelector";
import PostList from "./components/PostList";
import { TodoList } from "./components/TodoList";

export const ColorContext = createContext([]);

function App() {
  const [toggle, setToggle] = useState(true);
  const [color, setColor] = useState("red");
  return (
    <div className="container">
      <ColorContext.Provider value={[color, setColor] as any}>
        <ColorSelector></ColorSelector>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle && <TodoList></TodoList>}

        <PostList></PostList>
      </ColorContext.Provider>
    </div>
  );
}

export default App;
