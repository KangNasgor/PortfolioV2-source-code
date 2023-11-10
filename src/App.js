import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes, Link, useLocation, HashRouter} from "react-router-dom";
import MainMenu from "./components/MainMenu/MainMenu";
import Project from "./components/Project/Project";
import About from "./components/About/About";

export default function App() {
  const textStyle = {
    color: 'grey', 
};
  return (
    <div>
      <BrowserRouter>
      <ul className='navbar'>
      <li>
        <Link to="/"><a>Home</a></Link>
      </li>
      <li>
        <Link to="/project"><a>Projects</a></Link>
      </li>
      <li>
        <Link to="/about"><a>About</a></Link>
      </li>
      </ul>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

