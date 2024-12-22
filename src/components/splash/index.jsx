"use client";
import { useEffect } from "react";
import typed from "typed.js";
import AOS from "aos";
import gsap from "gsap";

import "aos/dist/aos.css";

export default function Splash() {
  useEffect(() => {
    new typed(".name", {
      strings: ["Welcome....", "Widiana Putra.", ""],
      typeSpeed: 70,
      showCursor: false,
      looping: true,
      backSpeed: 30,
    });

    gsap.to(".splash-container", {
      delay: 3.8,
      height: 0,
      duration: 1.3,
    });

    AOS.init();
  }, []);
  return (
    <div className="splash-container w-full h-screen flex absolute overflow-hidden">
      <div className="w-full h-screen bg-black z-[999] flex items-center justify-center">
        <h1 className="name text-white text-[2.5rem] sm:text-[3.5rem] font-bold text-center"></h1>
      </div>
    </div>
  );
}
