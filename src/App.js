import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Main/Home";
import Footer from "./Components/Body/Footer";
import Contact from "./Components/Main/Contact";
import MemberProfile from "./Components/Profiles/MemberProfile";
import Portfolio from "./Components/Portfolio/Portfolio";
import Projectinfo from "./Components/Portfolio/Projectinfo";
import Preloader from "./Components/Body/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="top-header">
      
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="ContactUs" element={<Contact />} />
            <Route path="Web-Portfolio" element={<Portfolio />} />
            <Route path="MemberProfile/:id" element={<MemberProfile />} />
            <Route path="Project-info/:id" element={<Projectinfo />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
