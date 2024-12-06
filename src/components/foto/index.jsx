"use client";
import { useEffect } from "react";
import { galleryData } from "@/data/gallery";
import Image from "next/image";
import AOS from "aos";

import "aos/dist/aos.css";

export default function GalleryFoto() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="" id="foto">
      <h1 className="text-center text-3xl font-bold my-5 cursor-pointer">
        Gallery
      </h1>
      <div className="flex w-full justify-center p-2">
        <div className="columns-1 sm:columns-2 md:columns-2 gap-2 w-[85%]">
          {galleryData.map((data, i) => (
            <div key={i} className="mb-4 relative group">
              <Image
                src={data.img}
                alt=".."
                className="cursor-pointer hover:scale-[101%] hover:rounded-md transition-all"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <div className="absolute top-0 left-0 flex w-full h-full justify-center items-center group-hover:bg-blackTransparant transition-all ">
                <h1 className="text-white text-2xl font-bold group-hover:block hidden">
                  {data.location ? data.location : "Locati0on"}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
