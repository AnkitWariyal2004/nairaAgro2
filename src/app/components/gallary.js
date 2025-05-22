import React from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";


const items = [
  { "img": "/NCSIG/1.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/2.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/3.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/4.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/5.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/6.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/7.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/8.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/9.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/10.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/11.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/12.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/13.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/14.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/15.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/16.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/17.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/18.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/19.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/20.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/21.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/22.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/23.jpg", "alt": "Farm team working" },
  { "img": "/NCSIG/25.jpeg", "alt": "Farm team working" },
  { "img": "/NCSIG/26.jpeg", "alt": "Farm team working" },
  { "img": "/NCSIG/27.jpeg", "alt": "Farm team working" },
  { "img": "/NCSIG/28.jpeg", "alt": "Farm team working" },
  { "img": "/NCSIG/29.jpeg", "alt": "Farm team working" },
  { "img": "/NCSIG/30.jpeg", "alt": "Farm team working" },
  { "img": "/NCSIG/31.jpeg", "alt": "Farm team working" },
  { "img": "/NCSIG/32.jpeg", "alt": "Farm team working" },

  { "img": "/Gallary/06052025/3.jpeg", "alt": "Farm team working" },
  { "img": "/Gallary/06052025/4.jpeg", "alt": "Farm team working" },
  { "img": "/Gallary/06052025/5.jpeg", "alt": "Farm team working" },
  { "img": "/Gallary/06052025/6.jpeg", "alt": "Farm team working" },
  { "img": "/Gallary/06052025/7.jpeg", "alt": "Farm team working" },
  { "img": "/Gallary/06052025/8.jpeg", "alt": "Farm team working" },
  { "img": "/Gallary/06052025/9.jpeg", "alt": "Farm team working" },
  { "img": "/Gallary/06052025/10.jpeg", "alt": "Farm team working" },
  { "img": "/Gallary/06052025/11.jpeg", "alt": "Farm team working" },
  { "img": "/Gallary/06052025/12.jpeg", "alt": "Farm team working" },
  { "img": "/Gallary/06052025/13.jpeg", "alt": "Farm team working" },
  { "img": "/Gallary/06052025/14.jpeg", "alt": "Farm team working" },
  { "img": "/Gallary/06052025/15.jpeg", "alt": "Farm team working" },
  { "img": "/Gallary/06052025/16.jpeg", "alt": "Farm team working" },
  { "img": "/Gallary/06052025/17.jpeg", "alt": "Farm team working" },
  { "img": "/Gallary/06052025/18.jpeg", "alt": "Farm team working" },
  { "img": "/Gallary/06052025/19.jpeg", "alt": "Farm team working" },
  { "img": "/Gallary/06052025/20.jpeg", "alt": "Farm team working" },
// added in 22-05-2025
  { "img": "/Gallary/IMG-20250522-WA0007.jpg", "alt": "Farm team working" },
{ "img": "/Gallary/IMG-20250522-WA0008.jpg", "alt": "Farm team working" },
{ "img": "/Gallary/IMG-20250522-WA0009.jpg", "alt": "Farm team working" },
{ "img": "/Gallary/IMG-20250522-WA0010.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0011.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0012.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0013.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0014.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0015.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0016.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0017.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0018.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0019.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0020.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0021.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0022.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0023.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0024.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0025.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0026.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0027.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0028.jpg", "alt": "Farm team working" },
 
  { "img": "/Gallary/IMG-20250522-WA0030.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0031.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0032.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0033.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0034.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0035.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0036.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0037.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0038.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0039.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0040.jpg", "alt": "Farm team working" },
  
  { "img": "/Gallary/IMG-20250522-WA0042.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0043.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0044.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0045.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0046.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0047.jpg", "alt": "Farm team working" },
  { "img": "/Gallary/IMG-20250522-WA0048.jpg", "alt": "Farm team working" }

];

const breakpointColumnsObj = {
  default: 3,
  1024: 3,
  768: 2,
  640: 1,
};

export default function Gallery() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      {/* Simplified Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Our Gallery
        </h1>
        <div className="w-20 h-1 bg-green-600 mx-auto"></div>
      </div>

      {/* Optimized Masonry Grid Without Animations */}
      <div className="max-w-7xl mx-auto">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto gap-4 sm:gap-6"
          columnClassName="masonry-column"
        >
          {items.map((item, index) => (
            <div key={index} className="mb-4 sm:mb-6">
              <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                {/* Optimized Image with priority for above-the-fold images */}
                <div className="w-full aspect-[4/3] bg-gray-200 relative">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    priority={index < 6} // Prioritize first 6 images
                    loading={index > 5 ? "lazy" : "eager"}
                    quality={75}
                  />
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}

