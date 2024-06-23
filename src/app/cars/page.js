import Cars from "@/components/carsPage/Cars";
import { getCars } from "@/libs/fetchingApi";
import React from "react";

const CarsPage = async () => {
  const cars = await getCars();

  return (
    <div className="container mt-5 lg:mt-10">
      <h1 className="text-xl font-semibold lg:text-2xl">Daftar Mobil</h1>

      <Cars carsData={cars} />
    </div>
  );
};

export default CarsPage;
