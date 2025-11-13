import React from "react";
import { FcShop } from "react-icons/fc";
import { FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";

export default function About() {
  return (
    <div className="p-14 flex flex-col gap-4">
      <h2 className="text-center text-2xl font-semibold">About</h2>

      <div className="p-14 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Image */}
        <div className="grid place-content-center">
          <img
            src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg"
            alt="shop-img"
            className="rounded-xl drop-shadow-2xl"
          />
        </div>

        {/* Detail */}
        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="flex items-center gap-2">
            <span>
              <span className="text-red-600 font-bold text-2xl text-center">
                Apni
              </span>
              <span>Shop.</span>
            </span>
            <FcShop className="text-2xl" />
          </div>

          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            architecto, mollitia excepturi consequuntur, aperiam facilis odit,
            dignissimos adipisci quo id delectus necessitatibus sequi laudantium
            eius? Corrupti et expedita tempora recusandae.Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Commodi architecto, mollitia
            excepturi consequuntur, aperiam facilis odit, dignissimos adipisci
            quo id delectus necessitatibus sequi laudantium eius? Corrupti et
            expedita tempora recusandae.
          </p>

          {/* Social Btn */}
          <div className="flex gap-8 *:cursor-pointer">
            <FaSquareInstagram className="text-2xl hover:text-pink-500" />
            <FaSquareTwitter className="text-2xl hover:text-[#00acee]" />
          </div>
        </div>
      </div>
    </div>
  );
}
