// "use client";

// import { useState, useEffect, useRef } from "react";
// import gsap from "gsap";
// import Image from "next/image";
// import Link from "next/link";
// import { Akaya_Kanadaka } from "next/font/google";

// const akayaKanadaka = Akaya_Kanadaka({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
// });

// /* ---------- TEXTS ---------- */

// const texts = [
//   "Welcome To Naira Agro",
//   "Grow Your Dreams",
//   "Harvest The Future",
//   "Organic & Fresh",
//   "Sustainable Farming",
// ];

// /* ---------- MEDIA (IMAGES + VIDEOS) ---------- */

// const media = [
//   { type: "image", src: "/NCSIG/slider_h/1.jpg" },
//   { type: "image", src: "/NCSIG/slider_h/2.jpeg" },
//   { type: "image", src: "/Gallary/proudcts/3.jpeg" },
//   { type: "image", src: "/Gallary/products/6.jpeg" },
//   { type: "video", src: "/videos/videohoney1.mp4" },
//   { type: "video", src: "/videos/video2.mp4" },
//   { type: "image", src: "/NCSIG/slider_h/4.jpeg" },
// ];

// export default function HeroSection() {
//   const [currentText, setCurrentText] = useState(0);
//   const [currentMedia, setCurrentMedia] = useState(0);
//   const [fade, setFade] = useState(true);

//   const contentRef = useRef(null);

//   useEffect(() => {
//     gsap.from(contentRef.current, {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       ease: "power3.out",
//     });

//     const textInterval = setInterval(() => {
//       setFade(false);

//       setTimeout(() => {
//         setCurrentText((prev) => (prev + 1) % texts.length);
//         setFade(true);
//       }, 500);
//     }, 5000);

//     const mediaInterval = setInterval(() => {
//       setCurrentMedia((prev) => (prev + 1) % media.length);
//     }, 6000);

//     return () => {
//       clearInterval(textInterval);
//       clearInterval(mediaInterval);
//     };
//   }, []);

//   return (
//     <section className="relative w-full h-[700px] flex items-center overflow-hidden bg-gray-900">

//       {/* ---------- BACKGROUND MEDIA ---------- */}

//       <div className="absolute inset-0 z-0">

//         {media.map((item, index) => (

//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentMedia ? "opacity-100" : "opacity-0"
//             }`}
//           >

//             {/* IMAGE */}

//             {item.type === "image" && (
//               <Image
//                 src={item.src}
//                 alt="Farm Background"
//                 fill
//                 priority={index === 0}
//                 className="object-cover"
//               />
//             )}

//             {/* VIDEO */}

//             {item.type === "video" && (

//               <div className="absolute inset-0 flex items-center justify-center">

//                 <video
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   className="h-[80%] aspect-[9/16] object-cover rounded-xl shadow-2xl"
//                 >
//                   <source src={item.src} type="video/mp4" />
//                 </video>

//               </div>

//             )}

//             <div className="absolute inset-0 bg-black/40" />

//           </div>

//         ))}

//       </div>

//       {/* ---------- CONTENT ---------- */}

//       <div className="container mx-auto px-4 relative z-10">

//         <div
//           ref={contentRef}
//           className="max-w-4xl mx-auto text-center"
//         >

//           {/* HEADLINE */}

//           <h1
//             className={`${akayaKanadaka.className} text-4xl md:text-6xl font-bold text-white transition-all duration-700 ${
//               fade ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             {texts[currentText]}
//           </h1>

//           {/* SUBTITLE */}

//           <p className="text-gray-200 mt-6 text-lg max-w-2xl mx-auto">
//             Natural farming products grown with care for people,
//             animals and the planet.
//           </p>

//           {/* ---------- PRODUCT SHOWCASE ---------- */}

         

//           {/* BUTTON */}

//           <div className="mt-10">

//             <Link
//               href="#contact-us"
//               className="inline-block bg-green-400 hover:bg-green-500 text-gray-900 font-semibold text-lg px-8 py-3 rounded-full transition transform hover:scale-105 shadow-lg"
//             >
//               Contact Us
//             </Link>

//           </div>

//         </div>

//       </div>

//       {/* SCROLL ICON */}

//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">

//         <div className="animate-bounce text-white">

//           ↓

//         </div>

//       </div>

//     </section>
//   );
// }
















// "use client";
// import { useState, useEffect, useRef } from "react";
// import gsap from "gsap";
// import Image from "next/image";
// import Link from "next/link";
// import { Akaya_Kanadaka } from "next/font/google";

// const akayaKanadaka = Akaya_Kanadaka({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
//   preload: true,
//   variable: "--font-akaya",
// });

// const texts = [
//   "Welcome To Naira Agro",
//   "Grow Your Dreams",
//   "Harvest The Future",
//   "Organic & Fresh",
//   "Sustainable Farming",
//   "Green Revolution",
// ];

// // Array of background images
// const backgroundImages = [
//   // "/NCSIG/slider_h/1.jpg",
//   "/Gallary/products/9.jpeg",
//   "/Gallary/products/10.jpeg",
// //  "/Gallary/products/3.jpeg",
//   // "/Gallary/products/6.jpeg",

//   // "/NCSIG/slider_h/2.jpeg",
//   // "/NCSIG/slider_h/4.jpeg",
// ];

// export default function HeroSection() {
//   const [currentText, setCurrentText] = useState(0);
//   const [currentImage, setCurrentImage] = useState(0);
//   const [fade, setFade] = useState(true);
//   const textRef = useRef(null);
//   const contentRef = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     // GSAP animations on mount
//     gsap.from(contentRef.current, {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       ease: "power3.out"
//     });

//     // Text animation interval
//     const textInterval = setInterval(() => {
//       setFade(false);
//       setTimeout(() => {
//         setCurrentText((prev) => (prev + 1) % texts.length);
//         setFade(true);
//       }, 500);
//     }, 5000);


//     const imageInterval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
//     }, 5000);

//     return () => {
//       clearInterval(textInterval);
//       clearInterval(imageInterval);
//     };
//   }, []);

//   useEffect(() => {
//     backgroundImages.forEach((src) => {
//       const img = new window.Image(); 
//       img.src = src;
//     });
//   }, []);

//   return (
//     <section className="relative w-full h-[650px] md:h-[675px] flex items-center overflow-hidden bg-gray-900">
//       {/* Background Image with overlay - now with sliding effect */}
//       <div className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out">
//         {backgroundImages.map((src, index) => (
//           <div
//             key={src}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentImage ? "opacity-100" : "opacity-0"
//             }`}
//             ref={index === currentImage ? imageRef : null}
//           >
//             <Image
//               src={src}
//               alt="Farm Background"
//               fill
//               priority={index === 0}
//               quality={100}
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
//           </div>
//         ))}
//       </div>

//       {/* Content Container - Centered */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div 
//           className="w-full max-w-4xl mx-auto text-center px-4 py-12"
//           ref={contentRef}
//         >
//           {/* Animated Text */}
//           <div className="overflow-hidden h-[120px] md:h-[150px] flex items-center justify-center">
//             <h1
//               className={`${akayaKanadaka.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white transition-all duration-1000 ${
//                 fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//               }`}
//               ref={textRef}
//             >
//               {texts[currentText]}
//             </h1>
//           </div>
          
//           {/* Subtitle */}
//           <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
//             Provide great welfare for animals, people, and the planet.
//           </p>
          
//           {/* Contact Button */}
//           <Link 
//             href="#contact-us" 
//             className="inline-block bg-green-400 hover:bg-green-500 text-gray-900 font-semibold text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/30"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
//         <div className="animate-bounce">
//           <svg 
//             className="w-6 h-6 text-white" 
//             fill="none" 
//             stroke="currentColor" 
//             viewBox="0 0 24 24"
//           >
//             <path 
//               strokeLinecap="round" 
//               strokeLinejoin="round" 
//               strokeWidth="2" 
//               d="M19 14l-7 7m0 0l-7-7m7 7V3"
//             />
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// }














"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Akaya_Kanadaka } from "next/font/google";

const akayaKanadaka = Akaya_Kanadaka({
  weight: "400",
  subsets: ["latin"],
});

const products = [
  {
    name: "Pure Natural Honey",
    image: "/Gallary/products/9.jpeg",
    description:
      "100% pure farm fresh honey collected from natural bee farms.",
  },
  {
    name: "Organic Moringa Powder",
    image: "/Gallary/products/10.jpeg",
    description:
      "Rich in vitamins and minerals. Boost immunity naturally.",
  },
];

export default function HeroSection() {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  const [productIndex, setProductIndex] = useState(0);

  useEffect(() => {
    gsap.from(contentRef.current, {
      x: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(imageRef.current, {
      x: 80,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });

    const interval = setInterval(() => {
      setProductIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const product = products[productIndex];

  return (
    <section className="relative w-full pt-5 md:pt-0 min-h-[600px] md:min-h-[720px] top-10 md:top-0 flex items-center bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 overflow-hidden">

      <div className="container mx-auto px-5 sm:px-6 lg:px-20 py-6 md:py-0 grid md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* LEFT CONTENT */}
        <div ref={contentRef} className="text-center md:text-left">

          <h1
            className={`${akayaKanadaka.className} text-3xl sm:text-4xl md:text-6xl font-bold text-green-900 leading-tight`}
          >
            Welcome To <br />
            <span className="text-green-600">
              Naira Agro Farm
            </span>
          </h1>

          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-700 max-w-lg mx-auto md:mx-0">
            We provide pure and natural farm products like honey and moringa,
            grown with sustainable farming practices for a healthier lifestyle.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">

            {/* <Link
              href="#products"
              className="px-7 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition shadow-md"
            >
              Explore Products
            </Link> */}

            <Link
              href="#contact-us"
              className="px-7 py-3 border border-green-600 text-green-700 rounded-full font-semibold hover:bg-green-100 transition"
            >
              Contact Us
            </Link>

          </div>

        </div>

        {/* RIGHT PRODUCT IMAGE */}
        <div
          ref={imageRef}
          className="relative w-full flex flex-col items-center -top-10 md:top-0"
        >

          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[520px]">

            <Image
              key={product.image}
              src={product.image}
              alt={product.name}
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />

          </div>

          {/* PRODUCT INFO CARD */}
          <div className="relative md:absolute md:bottom-6 md:left-6 mt-4 md:mt-0  bg-white/90 backdrop-blur-md px-5 py-4 rounded-xl shadow-lg max-w-sm w-full text-center md:text-left">

            <h3 className="text-lg font-semibold text-green-800">
              {product.name}
            </h3>

            <p className="text-sm text-gray-700 mt-1 leading-relaxed">
              {product.description}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}