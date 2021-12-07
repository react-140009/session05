import React, { useState, createContext } from "react";
import "./App.css";
import { ColorSelector } from "./components/ColorSelector";
import PhotoList from "./components/PhotoList";
import PostList from "./components/PostList";
import { TodoList } from "./components/TodoList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const ColorContext = createContext([]);

function App() {
  const [toggle, setToggle] = useState(true);
  const [color, setColor] = useState("red");
  return (
    <div className="container">
      <ColorContext.Provider value={[color, setColor] as any}>
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                Navbar
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/color">
                      Color
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/todo">
                      Todo
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/posts">
                      Posts
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/photos">
                      Photos
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

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
