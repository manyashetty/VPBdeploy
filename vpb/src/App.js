import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Navbar } from './components/Navbar';
import "./App.css";
import Footer from './components/Footer';
import Uiux from './pages/Uiux';
import {Home } from "./pages/Home";
import { Project } from "./pages/Project";
import ProjectPage from './pages/ProjectPage';
function App() {
return (
    <>
    <Navbar />
    <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<Home />}/>
      <Route path="/ui" element={<Uiux/>}/>
      <Route path="/project" element={<Project />}/>
      <Route path="/project/:id" element={<ProjectPage/>}/>
    </Routes>
    </BrowserRouter>
       
    <Footer />
    </>
 
  );
}

export default App;
