"use client";

import { useEffect } from "react";
import { images } from "@/assets/assets";

import typed from "typed.js";
import Image from "next/image";
import AOS from "aos";
import $ from "jquery";

import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    new typed(".myName", {
      strings: [" Widiana Putra."],
      typeSpeed: 100,
      showCursor: false,
      loop: false,
      startDelay: 200,
    });

    // jquery
    setTimeout(() => {
      $(".img2").addClass("transition-all");
      $(".img2").addClass("duration-1000");
      $(".img2").removeClass("scale-[10%]");
    }, 50);

    setTimeout(() => {
      $(".img1").removeClass("scale-[10%]");
    }, 150);

    AOS.init({
      once: true,
    });
  });

  return (
    <>
      <div className="h-[80px] sm:h-[0px]"></div>
      <div
        className="flex flex-col-reverse md:flex-row h-max sm:pt-[70px]"
        id="home"
      >
        <div className="w-full flex justify-center items-center flex-col py-[100px] ">
          <h1 className="myName text-[40px] md:text-[70px] font-bold text-center cursor-pointer"></h1>
          <h3
            className="text-center text-[28px] text-gray-600 cursor-pointer"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            - Coder | Gamer -
          </h3>
          <div className="w-[80%]">
            <p
              className="text-center pt-4 cursor-pointer text-gray-600"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              Hello! My name is I Putu Surya Widiana Putra. I am a student
              majoring in Software Engineering (RPL) at school. I am also a web
              developer with a passion for creating and improving websites. I
              love learning new things and building useful digital solutions.
            </p>
          </div>
          <div className="w-full md:w-max flex justify-center gap-5 mt-10">
            <button
              className="text-center border-[2px] py-3 px-5 text-sm border-gray-400 bg-white hover:bg-black hover:text-white hover:scale-125 transition-all duration-300 rounded-md shadow-2xl"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="650"
            >
              Contact Me
            </button>
            <button
              className="text-center border-[2px] py-3 px-5 text-sm border-gray-400 bg-white hover:bg-black hover:text-white hover:scale-125 transition-all duration-300 rounded-md shadow-2xl"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="700"
            >
              My Project
            </button>
          </div>
        </div>

        <div className="w-full flex md:h-screen justify-center items-center p-5">
          <div data-aos="zoom-in" data-aos-duration="1200">
            <div className="relative">
              <Image
                src={images.meAyaka}
                width={1000}
                height={1000}
                alt="Profile Picture"
                className="img1 scale-[10%] w-full max-w-[0px]  md:max-w-[200px] h-auto object-cover grayscale hover:grayscale-0 transition-all duration-300 rounded-md absolute z-10 top-0  sm:-translate-x-[30%] sm:-translate-y-[20%] hidden sm:block hover:scale-110 hover:rounded-2xl -translate-x-[18%] -translate-y-[10%]"
              />
            </div>
            <Image
              src={images.me}
              width={1000}
              height={1000}
              alt="Profile Picture"
              className="img2 scale-[10%] w-full max-w-[350px] md:max-w-[400px] h-auto object-cover grayscale hover:grayscale-0 duration-300 rounded-md hover:scale-110 hover:rounded-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
