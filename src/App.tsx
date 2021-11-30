import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="container">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h1>Test</h1>}
      <TodoList></TodoList>
    </div>
  );
}

export default App;
