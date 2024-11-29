"use client";
import { useState, useEffect } from "react";
import Home from "@/components/home";
import Navbar from "@/components/navbar";
import Splash from "@/components/splash";
import Project from "@/components/projects";
import GalleryFoto from "@/components/foto";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
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
  );
}
