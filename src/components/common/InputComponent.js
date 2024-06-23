import React from "react";

const InputComponent = ({
  id,
  label,
  type,
  value,
  placeholder,
  onChange,
  disabled,
}) => {
  return (
    <div className="mb-3 text-sm lg:text-base">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        className="mt-1 w-full rounded-md border border-gray-300 p-2 outline-none focus:border-black"
        onChange={onChange}
        required
        disabled={disabled}
      />
    </div>
  );
};

export default InputComponent;
