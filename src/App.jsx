import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Tracker from "./components/Tracker";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Tracker</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route exact path="/" element={<Tracker></Tracker>}></Route>
            <Route exact path="/about" element={<About></About>}></Route>
            <Route exact path="/contact" element={<Contact></Contact>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
