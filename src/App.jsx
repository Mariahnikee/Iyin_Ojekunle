import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import MainLayout from "./components/layout/Mainlayout";
import Home from "./pages/home/Home";
import Resources from "./pages/home/Resources";
import Speaking from "./pages/home/Speaking";
import Contact from "./pages/home/Contact";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="resources" element={<Resources />} />
          <Route path="speaking" element={<Speaking />} />
          <Route path="contact" element={<Contact />} />
         
        </Route>
      </Routes>
    </Router>
  );
}

export default App;