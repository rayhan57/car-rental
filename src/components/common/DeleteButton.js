import React from "react";

const DeleteButton = ({ label, onClick }) => {
  return (
    <button
      type="button"
      className="mb-3 rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700 lg:text-base"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default DeleteButton;
