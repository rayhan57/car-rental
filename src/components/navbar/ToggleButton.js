import React from "react";
import { FaBars } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

const ToggleButton = ({ toggleNavbar, isOpen }) => {
  return (
    <button
      onClick={toggleNavbar}
      type="button"
      className="order-1 ms-4 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary md:hidden"
    >
      {isOpen ? <IoCloseOutline size={24} /> : <FaBars size={24} />}
    </button>
  );
};

export default ToggleButton;
