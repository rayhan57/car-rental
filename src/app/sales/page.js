import Sales from "@/components/salesPage/Sales";
import { getSales } from "@/libs/fetchingApi";
import React from "react";

const SalesPage = async () => {
  const sales = await getSales();

  return (
    <div className="container mt-5 lg:mt-10">
      <h1 className="text-xl font-semibold lg:text-2xl">Daftar Sales</h1>

      <Sales salesData={sales} />
    </div>
  );
};

export default SalesPage;
