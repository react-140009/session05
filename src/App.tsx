import React, { useState, createContext, lazy, Suspense } from "react";
import "./App.css";
import { Menu, ColorSelector, PhotoDetail, NotFound } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Code Split
const TodoList = lazy(() => import("./components/TodoList"));
const PostList = lazy(() => import("./components/PostList"));
const PhotoList = lazy(() => import("./components/PhotoList"));

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
                  {toggle && <h2>Toggle header!</h2>}
                </>
              }
            ></Route>
            <Route path="/color" element={<ColorSelector />} />
            <Route
              path="/todo"
              element={
                <Suspense fallback={<>Loding...</>}>
                  <TodoList />
                </Suspense>
              }
            />
            <Route
              path="/posts"
              element={
                <Suspense fallback={<>Loding...</>}>
                  <PostList />
                </Suspense>
              }
            />
            <Route
              path="/photos"
              element={
                <Suspense fallback={<>Loding...</>}>
                  <PhotoList />
                </Suspense>
              }
            />
            <Route path="/photos/:id" element={<PhotoDetail />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ColorContext.Provider>
    </div>
  );
}

export default App;
