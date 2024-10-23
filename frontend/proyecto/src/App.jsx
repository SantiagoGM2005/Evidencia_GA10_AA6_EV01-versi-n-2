import React from 'react';

import { BrowserRouter, Router , Route, Routes} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Navbar from "./Navbar"
import Sitios from "./Sitios"
import Productos from "./Productos"
import Register from "./Register"



function App() {
  return (
    <BrowserRouter>
    
    <Navbar />
    <Routes>
    
   
    <Route path="/login" element={<Login />} />
    <Route path="/Register" element={<Register/>} />
    <Route path="/" element={<Home />} />
    <Route path="/Sitios" element={<Sitios />} />
    <Route path="/productos" element={<Productos />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;