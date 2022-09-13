import React from 'react';
import './App.css';
import NavBar from "./components/navbar/NavBar";
import Projects from './components/projects/Projects';
import Experiences from './components/experiences/Experiences';
import Contact from './components/contact/Contact';
import {Routes, Route} from 'react-router-dom';
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

function App() {
  return (
    <div className={"App"}>
      <NavBar />
      <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"projects"} element={<Projects />} />
          <Route path={"experiences"} element={<Experiences />} />
          <Route path={"contact"} element={<Contact />} />
      </Routes>
        <Footer />
    </div>
  );
}

export default App;
