import React from "react";
import { IoAdd } from "react-icons/io5";

const AddButton = ({ label, onClick }) => {
  return (
    <button
      className="flex items-center gap-1 rounded-md bg-sky-500 px-4 py-2 text-sm text-white hover:bg-sky-600 lg:text-base"
      onClick={onClick}
    >
      <IoAdd size={20} /> {label}
    </button>
  );
};

export default AddButton;
