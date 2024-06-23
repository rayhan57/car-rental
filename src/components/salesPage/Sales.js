"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AddButton from "../common/AddButton";
import SearchInput from "../common/SearchInput";
import SalesTable from "./SalesTable";

const Sales = ({ salesData }) => {
  const router = useRouter();
  const [sales, setSales] = useState(salesData);
  const [searchValue, setSearchValue] = useState("");

  const handleClickAdd = () => router.push("/sales/add");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchValue.trim()) return;

    const filteredSales = sales.filter(({ nama }) =>
      nama.toLowerCase().includes(searchValue.toLowerCase()),
    );

    setSales(filteredSales);
  };

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <AddButton label={"Tambah Sales"} onClick={handleClickAdd} />
        <SearchInput
          placeholder="Cari Sales"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onSearch={handleSearch}
        />
      </div>
      <SalesTable data={sales} />
    </div>
  );
};

export default Sales;
