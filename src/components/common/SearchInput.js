import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchInput = ({ placeholder, value, onChange, onSearch }) => {
  return (
    <form onSubmit={onSearch}>
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder={placeholder}
          className="rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-black lg:text-base"
          value={value}
          onChange={onChange}
        />
        <IoSearchOutline
          size={20}
          className="absolute right-3 cursor-pointer"
          onClick={onSearch}
        />
      </div>
    </form>
  );
};

export default SearchInput;
