import React from "react";

export default function HeroSection({ productsRef }) {

  function handleScroll() {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      className="
        min-h-[85vh] 
        flex justify-center items-center 
        px-4 
        text-white 
        bg-black/60 
        bg-[url('https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg')] 
        bg-cover bg-center bg-no-repeat 
        bg-blend-overlay
      "
    >
      {/* Intro Content */}
      <div className="flex flex-col items-center gap-6 text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-semibold leading-snug">
          One Stop Solution <span className="text-rose-600">Apni</span>shop.
        </h1>

        <p className="text-gray-200 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          qui repellat culpa nobis tempora exercitationem pariatur unde ratione
          cupiditate repellendus.
        </p>

        <button
          onClick={handleScroll}
          className="
            bg-gray-200 
            px-8 py-3 
            text-lg font-semibold text-red-600 
            rounded-lg shadow-xl
            border border-transparent
            cursor-pointer
            hover:bg-transparent hover:border-gray-300 hover:text-white
            transition duration-300
          "
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}
