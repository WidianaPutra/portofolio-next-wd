"use client";

import { useState, useEffect } from "react";
import Home from "@/components/home";
import Navbar from "@/components/navbar";
import AOS from "aos";
import typed from "typed.js";
import "aos/dist/aos.css";
import Splash from "@/components/splash";
import Project from "@/components/projects";
import GalleryFoto from "@/components/foto";

AOS.init();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 4000);
  });
  return (
    <>
      <div>
        {showSplash ? (
          <Splash />
        ) : (
          <div className="bg-gray-100">
            <Navbar />
            <Home />
            <Project />
            <GalleryFoto />
          </div>
        )}
      </div>
    </>
  );
}
