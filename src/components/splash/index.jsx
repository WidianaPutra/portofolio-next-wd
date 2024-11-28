"use client";
import { useEffect } from "react";
import typed from "typed.js";
import aos from "aos";
import gsap from "gsap";

import "aos/dist/aos.css";

aos.init();

export default function Splash() {
  useEffect(() => {
    new typed(".name", {
      strings: ["Welcome....", "Widiana Putra.", ""],
      typeSpeed: 70,
      showCursor: false,
      // backDelay: 1000,
      looping: true,
    });
    gsap.to(".container-splash", {
      delay: 1,
      duration: 500,
      // display: "none",
      backgroundColor: "red",
    });
  }, []);
  return (
    <div className="container-splash w-full h-screen flex justify-center items-center flex-col">
      <h1 className="name text-black text-[2.5rem] sm:text-[3.5rem] font-bold text-center"></h1>
      <p className="welcome-text text-[1rem] font-bold"></p>
    </div>
  );
}
