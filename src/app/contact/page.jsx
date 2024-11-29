"use client";
import { icons, images } from "@/assets/assets";
import { contactData } from "@/data/contact";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  const router = useRouter();
  return (
    <div className="gray-300">
      <Image
        className="router absolute z-10 top-2 left-2 w-max h-[30px] cursor-pointer"
        src={icons.left}
        alt="..."
        onClick={() => router.back()}
      />
      <div className="flex flex-col md:flex-row w-full h-screen justify-center items-center">
        {/* contain 1 */}
        <div className="md:w-[50%]">
          <Image
            src={images.me}
            alt="..."
            className="grayscale md:h-screen h-[200px] w-auto object-cover rounded-full md:rounded-none hover:grayscale-0"
          />
        </div>
        {/* contain 2 */}
        <div className="md:w-[50%] flex items-center justify-center flex-col">
          <h1 className="font-bold text-[50px] mb-4">Surya Widiana</h1>
          <p className="text-[20px] text-gray-700 mb-2">Contact Me</p>
          <div className="flex gap-4">
            {contactData.map((el, i) => (
              <Link
                href={el.link}
                key={i}
                className="border-2 border-black py-2 px-5 rounded-2xl flex items-center gap-1 hover:bg-black hover:text-white text-sm"
              >
                {el.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
