"use client";
import { useEffect } from "react";
import typed from "typed.js";
import AOS from "aos";

import "aos/dist/aos.css";

export default function Splash() {
  useEffect(() => {
    new typed(".name", {
      strings: ["Welcome....", "Widiana Putra.", ""],
      typeSpeed: 70,
      showCursor: false,
      looping: true,
    });
    AOS.init();
  }, []);
  return (
    <div className="container-splash w-full h-screen flex justify-center items-center flex-col">
      <h1 className="name text-black text-[2.5rem] sm:text-[3.5rem] font-bold text-center"></h1>
      <p className="welcome-text text-[1rem] font-bold"></p>
    </div>
  );
}
