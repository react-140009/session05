import React, { useState, createContext } from "react";
import "./App.css";
import {
  Menu,
  ColorSelector,
  PhotoList,
  PostList,
  TodoList,
} from "./components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const ColorContext = createContext([]);

function App() {
  const [toggle, setToggle] = useState(true);
  const [color, setColor] = useState("red");
  return (
    <div className="container">
      <ColorContext.Provider value={[color, setColor] as any}>
        <Router>
          <Menu />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <button onClick={() => setToggle(!toggle)}>Toggle</button>
                  {toggle && <h2>Toggle header</h2>}
                </>
              }
            ></Route>
            <Route path="/color" element={<ColorSelector />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/photos" element={<PhotoList />} />
          </Routes>
        </Router>
      </ColorContext.Provider>
    </div>
  );
}

export default App;
