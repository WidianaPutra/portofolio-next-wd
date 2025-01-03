"use client";
import { useEffect } from "react";
import { projectData } from "@/data/project";

import Image from "next/image";
import Link from "next/link";
import AOS from "aos";

import "aos/dist/aos.css";

export default function Project() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="project" className="w-full">
      <h1 className="text-center pb-5 text-3xl font-bold">My Project</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 p-4 gap-5">
        {projectData.map((el, i) => (
          <Link
            href={el.link}
            key={i}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div
              key={i}
              className="w-full p-4 shadow-2xl rounded-md hover:scale-[102%] transition-all group"
            >
              <Image
                src={el.img}
                alt=".."
                className="w-full rounded-md grayscale group-hover:grayscale-0"
              />
              <p className="pt-2 text-2xl">{el.title}</p>
              <div className="flex gap-3 mt-3 flex-wrap">
                {el.tech.map((el, i) => (
                  <p
                    key={i}
                    className="py-1 px-2 border-2 border-black text-[10px] md:text-[13px] rounded-sm cursor-pointer hover:bg-black hover:text-white hover:scale-[115%] transition-all"
                  >
                    {el}
                  </p>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
