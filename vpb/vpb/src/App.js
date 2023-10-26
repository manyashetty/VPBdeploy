import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-router-dom";
import AboutUs from './AboutUs';
import Mobile from './mobile';
import './App.css';

function App(){
  return (
    <><BrowserRouter>
    <Routes>
      <Route path="/Mobile" element={<Mobile/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import "react-router-dom"
// import Home from "./components/home"
// import MenuPage from "./components/MenuPage"
// import AboutUs from "./components/AboutUs"
// import React from "react"
// import "bootstrap/dist/css/bootstrap.min.css"
// import Nav from './components/nav'
// const App=()=>{
//   return(
//     <><BrowserRouter>
//     <Nav></Nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//           <Route path="/MenuPage" element={<MenuPage />} />
//           <Route path="/AboutUs" element={<AboutUs />} />
//       </Routes>
//     </BrowserRouter>
//     </>
//   )
// }
// export default App;