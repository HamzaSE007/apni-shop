import React from "react";
import { FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";

export default function PartnerProfile({ image, name, description }) {
  return (
    <div
      className="flex flex-col gap-4 items-center bg-gray-100 p-6 rounded-xl shadow-md 
      hover:shadow-xl duration-300 hover:-translate-y-1 text-center"
    >
      {/* Image */}
      <div className="h-36 w-36 rounded-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 duration-300"
        />
      </div>

      {/* Name */}
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>

      {/* Social Links */}
      <div className="flex gap-6 text-2xl">
        <a href="#" className="hover:text-pink-500 duration-200">
          <FaSquareInstagram />
        </a>

        <a href="#" className="hover:text-[#00acee] duration-200">
          <FaSquareTwitter />
        </a>
      </div>
    </div>
  );
}
