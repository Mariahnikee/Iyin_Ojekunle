import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import MainLayout from "./components/layout/Mainlayout";
import Home from "./pages/home/Home";
import Event from "./pages/home/Event";
import Resources from "./pages/home/Resources";
import Booking from "./pages/home/Booking";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
           <Route path="event" element={<Event />} />
          <Route path="Resources" element={<Resources />} />
          <Route path="booking" element={<Booking />} />
         
        </Route>
      </Routes>
    </Router>
  );
}

export default App;