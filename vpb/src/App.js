import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Navbar } from './components/Navbar';
import "./App.css";
import Footer from './components/Footer';
import { About } from './pages/About';
import {Home } from "./pages/Home";
import { Project } from "./pages/Project";
import ProjectPage from './pages/ProjectPage';
import ServicePage from './pages/ServicePage';
import { Contact } from './pages/Contact';
function App() {
return (
    <>
    <Navbar />
    <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<Home />}/>
  
      <Route path="/project" element={<Project />}/>
      <Route path="/project/:id" element={<ProjectPage/>}/>
      <Route path="/services/:id" element={<ServicePage/>}/>
      <Route path="/aboutus" element={<About/>}/>
      <Route path="/contactus" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
       
    <Footer />
    </>
 
  );
}

export default App;
