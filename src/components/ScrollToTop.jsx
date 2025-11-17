import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  function handleScroll() {
    if (window.scrollY > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  // Add event listener on window object
  window.addEventListener("scroll", handleScroll);

  function scrollTop() {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }
  return (
    <>
      {show && (
        <span
          onClick={scrollTop}
          className="w-10 h-10 bg-gray-500 rounded-full fixed bottom-0 right-0 z-30 m-10 drop-shadow-2xl flex justify-center items-center group cursor-pointer"
        >
          <FaArrowUp className="text-xl text-white group-hover:-translate-y-1 duration-500" />
        </span>
      )}
    </>
  );
}
