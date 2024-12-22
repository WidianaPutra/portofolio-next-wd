"use client";
import { useState, useEffect } from "react";
import Home from "@/components/home";
import Navbar from "@/components/navbar";
import Splash from "@/components/splash";
import Project from "@/components/projects";
import GalleryFoto from "@/components/foto";
import Footer from "@/components/footer";
import Certificate from "@/components/certificate";

export default function App() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-100">
      <Splash />
      {showSplash && (
        <>
          <Navbar />
          <Home />
          <Project />
          <Certificate />
          <GalleryFoto />
          <Footer />
        </>
      )}
    </div>
  );
}
