"use client";
import { useState, useEffect } from "react";
import { icons } from "@/assets/assets";
import { navData } from "@/data/navbar";

import $ from "jquery";
import Link from "next/link";
import Image from "next/image";
import aos from "aos";

import "aos/dist/aos.css";

aos.init();

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav
        className="w-full p-5 shadow-2xl fixed z-50 bg-white"
        data-aos="fade-down"
        data-aos-duration="1400"
        data-aos-delay="100"
      >
        {/* desktop */}
        <div className="flex w-full justify-between items-center">
          {/* logo */}
          <h1 className="font-bold text-xl sm:text-3xl">{"$this->Surya"}</h1>
          {/* nav links list */}
          <div className=" gap-8 hidden sm:flex">
            {navData.map((el, index) => (
              <Link
                href={el.url}
                key={index}
                className="font-bold text-[19px] hover:scale-110"
              >
                {el.title}
              </Link>
            ))}
          </div>
          {/* contact */}
          <div>
            <div className="hidden sm:flex">
              <button className="bg-black text-white w-[100px] h-[40px] rounded-md font-bold">
                Contact
              </button>
            </div>
            {/* humberger menu */}
            <Image
              src={showNav ? icons.close : icons.humberger}
              width={200}
              height={200}
              alt=".."
              onClick={() => setShowNav(!showNav)}
              className="w-[40px] h-auto block sm:hidden cursor-pointer"
            />
          </div>
        </div>

        {/* mobile nav menu */}
        <div
          className={`sm:hidden flex flex-col w-full gap-4 ${
            showNav ? "h-max" : "h-[0px]"
          } overflow-hidden transition-all`}
        >
          {navData.map((el, index) => (
            <Link
              href={el.url}
              key={index}
              className="font-bold text-[19px] hover:scale-110 text-center py-2"
            >
              {el.title}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
