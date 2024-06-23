import React from "react";

const DropdownInputRent = ({
  id,
  label,
  value,
  selectedValue,
  onChange,
  options,
  disabled,
}) => {
  return (
    <div className="mb-3 text-sm lg:text-base">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        className="mt-1 w-full rounded-md border border-gray-300 p-2 outline-none focus:ring-1 focus:ring-black"
        value={value}
        onChange={onChange}
        required
        disabled={disabled}
      >
        <option value="">{selectedValue}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownInputRent;
