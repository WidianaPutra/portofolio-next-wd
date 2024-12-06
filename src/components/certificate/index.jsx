"use client";
import { CertificateData } from "@/data/certificate";
import { useEffect } from "react";

import aos from "aos";
import Image from "next/image";

import "aos/dist/aos.css";

export default function Certificate() {
  useEffect(() => {
    aos.init();
  });

  return (
    <div className="flex flex-col items-center" id="certificate">
      <h1 className="welcome-certificate text-center text-3xl my-5 font-bold">
        My Certificate
      </h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5 mx-5 w-[80%]">
        {CertificateData.map((data, i) => (
          <div
            className="relative w-full group cursor-pointer"
            key={i}
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <Image src={data.img} alt="" className="w-full" />
            <div className="absolute flex flex-col justify-center items-center top-0 left-0 w-full h-full transition-all group-hover:bg-blackTransparant">
              <h2 className="text-2xl text-center text-white px-2 mb-2 scale-0 group-hover:scale-100 transition-all ">
                {data.title}
              </h2>
              <h2 className="text-lg text-center text-white px-2 scale-0 group-hover:scale-100 transition-all ">
                {data.description}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
