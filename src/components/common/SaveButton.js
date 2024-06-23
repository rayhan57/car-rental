import React from "react";

const SaveButton = ({ label, disabled }) => {
  return (
    <button
      className="rounded-md bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700 disabled:bg-green-600 disabled:opacity-50 lg:text-base"
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default SaveButton;
