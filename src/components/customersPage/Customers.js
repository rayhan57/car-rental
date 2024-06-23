"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AddButton from "../common/AddButton";
import SearchInput from "../common/SearchInput";
import CustomersTable from "./CustomersTable";

const Customers = ({ customersData }) => {
  const router = useRouter();
  const [customers, setCustomers] = useState(customersData);
  const [searchValue, setSearchValue] = useState("");

  const handleClickAdd = () => router.push("/customers/add");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchValue.trim()) return;

    const filteredCustomers = customers.filter(({ nama }) =>
      nama.toLowerCase().includes(searchValue.toLowerCase()),
    );

    setCustomers(filteredCustomers);
  };

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <AddButton label={"Tambah Customer"} onClick={handleClickAdd} />
        <SearchInput
          placeholder="Cari Customer"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onSearch={handleSearch}
        />
      </div>
      <CustomersTable data={customers} />
    </div>
  );
};

export default Customers;
