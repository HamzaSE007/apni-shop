import React, { useState } from "react";
import { FcShop } from "react-icons/fc";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import Portal from "./Portal/Portal";
import { portalContent } from "../constant/portalContent";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isKey, setIsKey] = useState(null);
  const [openSection, setOpenSection] = useState(null); // for mobile accordion

  const content = portalContent;

  function handlePortal(key) {
    setIsKey(key);
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
    setIsKey(null);
  }

  function toggleSection(section) {
    setOpenSection(openSection === section ? null : section);
  }

  return (
    <footer className="bg-gray-100 px-6 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-gray-400">

      {/* Shop Details */}
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <span>
            <span className="text-red-600 font-bold text-2xl">Apni</span>
            <span>Shop.</span>
          </span>
          <FcShop className="text-2xl" />
        </div>
        <p className="max-w-xs text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque odit aut molestiae suscipit aspernatur expedita.
        </p>

        <form className="flex w-full max-w-xs" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your Email address"
            className="flex-1 p-3 rounded-l shadow outline-none"
          />
          <button
            type="submit"
            className="bg-rose-600 text-white py-3 px-4 shadow rounded-r hover:bg-transparent hover:text-rose-600 border transition duration-300 cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Links / Mobile Accordion */}
      <div className="flex flex-col gap-4 justify-center mx-auto">
        <h2
          className="text-xl font-medium lg:cursor-default cursor-pointer flex justify-between lg:justify-start "
          onClick={() => toggleSection("info")}
        >
          Information
          <span className="lg:hidden">{openSection === "info" ? "-" : "+"}</span>
        </h2>
        <ul
          className={`flex flex-col gap-2 text-gray-700 transition-all duration-300 overflow-hidden ${openSection === "info" ? "max-h-96" : "max-h-0"} lg:max-h-full`}
        >
          <li>
            <Link to="/about" className="hover:text-red-600 transition block">
              About Us
            </Link>
          </li>
          <li
            className="hover:text-red-600 cursor-pointer transition"
            onClick={() => handlePortal("returnPolicy")}
          >
            Return Policy
          </li>
          <li
            className="hover:text-red-600 cursor-pointer transition"
            onClick={() => handlePortal("termCondition")}
          >
            Term & Condition
          </li>
          <li
            className="hover:text-red-600 cursor-pointer transition"
            onClick={() => handlePortal("privacyPolicy")}
          >
            Privacy Policy
          </li>
          <li
            className="hover:text-red-600 cursor-pointer transition"
            onClick={() => handlePortal("faq")}
          >
            FAQ
          </li>
        </ul>

        {isOpen && isKey && (
          <Portal isOpen={isOpen} onClose={onClose}>
            <h1 className="text-2xl font-bold mb-4">{content[isKey].title}</h1>
            <p>{content[isKey].description}</p>
          </Portal>
        )}
      </div>

      {/* Contact / Mobile Accordion */}
      <div className="flex flex-col gap-4 mx-auto">
        <h2
          className="text-xl font-medium lg:cursor-default cursor-pointer flex justify-between lg:justify-start"
          onClick={() => toggleSection("contact")}
        >
          Contact
          <span className="lg:hidden">{openSection === "contact" ? "-" : "+"}</span>
        </h2>
        <ul
          className={`flex flex-col gap-2 text-gray-700 transition-all duration-300 overflow-hidden ${openSection === "contact" ? "max-h-96" : "max-h-0"} lg:max-h-full`}
        >
          <li className="flex items-start gap-2">
            <IoLocationOutline className="text-lg mt-1" />
            <span>
              Block G 4, Phase 2 Johar Town, <br />
              Lahore, Pakistan
            </span>
          </li>
          <li className="flex items-center gap-2">
            <FiPhone />
            +92 319 1538407
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineMail />
            info@gmail.com
          </li>
        </ul>
      </div>
    </footer>
  );
}
