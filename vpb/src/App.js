import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Navbar } from './components/Navbar';
import "./App.css";
import Footer from './components/Footer';
import Uiux from './pages/Uiux';
import {Home } from "./pages/Home";
import { Project } from './pages/Project';
function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<Home />}/>
      <Route path="/ui" element={<Uiux/>}/>
      <Route path="/project/:projectId" element={<Project />}/>
    </Routes>
    </BrowserRouter>
       
    <Footer />
    </>
 
  );
}

export default App;
