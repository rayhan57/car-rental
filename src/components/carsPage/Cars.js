"use client";
import React, { useState } from "react";
import SearchInput from "../common/SearchInput";
import AddButton from "../common/AddButton";
import CarsTable from "./CarsTable";
import { useRouter } from "next/navigation";

const Cars = ({ carsData }) => {
  const router = useRouter();
  const [cars, setCars] = useState(carsData);
  const [searchValue, setSearchValue] = useState("");

  const handleClickAdd = () => router.push("/cars/add");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchValue.trim()) return;

    const filteredCars = cars.filter(({ nomor_polisi, nama_mobil }) =>
      [nomor_polisi, nama_mobil].some((value) =>
        value.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    );

    setCars(filteredCars);
  };

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <AddButton label={"Tambah Mobil"} onClick={handleClickAdd} />
        <SearchInput
          placeholder="Cari Mobil"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onSearch={handleSearch}
        />
      </div>
      <CarsTable data={cars} />
    </div>
  );
};

export default Cars;
