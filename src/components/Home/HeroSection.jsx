import React from "react";

export default function HeroSection({productsRef}) {

  function handleScroll(){
    productsRef.current.scrollIntoView({ behavior: "smooth"});
  }
  return (
    <div className="h-[80vh] flex justify-center items-center px-4 text-white bg-[#212121] bg-[url(https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg)] bg-cover bg-center bg-blend-overlay overflow-hidden">
      {/* Intro */}
      <div className="flex flex-col items-center gap-6">
        <p className="text-4xl font-semibold">
          One Stop Solution <span className="text-rose-600">Apni</span>shop.
        </p>
        <p className="w-2/4 mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque odit
          aut molestiae suscipit aspernatur expedita. Placeat veritatis facilis
          corrupti velit assumenda nulla repudiandae, unde aperiam tempore
          nostrum nisi, adipisci nobis.
        </p>
        <button onClick={handleScroll} className="bg-gray-300 px-6 py-2 w-fit text-center text-xl font-medium text-red-600 rounded-lg shadow-2xl cursor-pointer hover:bg-transparent border duration-400">Shop now</button>
      </div>
    </div>
  );
}
