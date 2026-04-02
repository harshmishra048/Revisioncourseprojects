import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import TrustedBy from "./Components/TrustedBy";
import Services from "./Components/Services";
import OurWork from "./Components/OurWork";
import Teams from "./Components/Teams";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";

import ServiceDetail from "./Pages/ServiceDetail";
import ServicesPage from "./Pages/ServicesPage";

import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
    </>
  );
};

const App = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light",
  );

  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="dark:bg-black relative">
        <Toaster />

        {/* Navbar always visible */}
        <Navbar theme={theme} setTheme={setTheme} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />

          {/* All services page */}
          <Route path="/services" element={<ServicesPage />} />

          {/* Individual service */}
          <Route path="/services/:slug" element={<ServiceDetail />} />
          {/* contact us */}
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>

        {/* Footer always visible */}
        <Footer theme={theme} />

        {/* Custom cursor */}
        <div
          ref={outlineRef}
          className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-50"
          style={{ transition: "transform 0.1s ease-out" }}
        ></div>

        <div
          ref={dotRef}
          className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-50"
        ></div>
      </div>
    </BrowserRouter>
  );
};

export default App;
