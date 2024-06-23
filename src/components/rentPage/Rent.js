"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AddButton from "../common/AddButton";
import SearchInput from "../common/SearchInput";
import RentTable from "./RentTable";

const Rent = ({ rentData }) => {
  const router = useRouter();
  const [rent, setRent] = useState(rentData);
  const [searchValue, setSearchValue] = useState("");

  const handleClickAdd = () => router.push("/rent/add");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchValue.trim()) return;

    const filteredRent = rent.filter(({ nama_customer }) =>
      nama_customer.toLowerCase().includes(searchValue.toLowerCase()),
    );

    setRent(filteredRent);
  };

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <AddButton label={"Tambah Sewa"} onClick={handleClickAdd} />
        <SearchInput
          placeholder="Cari..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onSearch={handleSearch}
        />
      </div>
      <RentTable data={rent} />
    </div>
  );
};

export default Rent;
