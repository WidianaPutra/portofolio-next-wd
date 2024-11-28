import { galleryData } from "@/data/gallery";
import Image from "next/image";
import aos from "aos";

import "aos/dist/aos.css";

aos.init();

export default function GalleryFoto() {
  return (
    <div className="" id="foto">
      <h1 className="text-center text-[40px] font-bold my-4 cursor-pointer">
        Gallery
      </h1>
      <div className="flex w-full justify-center p-2">
        <div className="columns-1 sm:columns-2 md:columns-2 gap-2 w-[85%]">
          {galleryData.map((data, i) => (
            <div key={i} className="mb-4">
              <Image
                src={data.img}
                alt=".."
                className="cursor-pointer hover:scale-[101%] hover:rounded-md transition-all"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
