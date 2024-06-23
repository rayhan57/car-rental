import React from "react";

const DropdownInput = ({
  id,
  label,
  value,
  selectedValue,
  onChange,
  options,
}) => (
  <div className="mb-3 text-sm lg:text-base">
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      className="mt-1 w-full rounded-md border border-gray-300 p-2 outline-none focus:ring-1 focus:ring-black"
      value={value}
      onChange={onChange}
      required
    >
      <option value="">{selectedValue}</option>
      {options.map((optionValue) => (
        <option key={optionValue} value={optionValue}>
          {optionValue}
        </option>
      ))}
    </select>
  </div>
);

export default DropdownInput;
