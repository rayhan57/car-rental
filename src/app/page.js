import Rent from "@/components/rentPage/Rent";
import { getRent } from "@/libs/fetchingApi";
import React from "react";

const Homepage = async () => {
  const rent = await getRent();

  return (
    <div className="container mt-5 lg:mt-10">
      <h1 className="text-xl font-semibold lg:text-2xl">
        Daftar Customer Penyewaan Mobil
      </h1>

      <Rent rentData={rent} />
    </div>
  );
};

export default Homepage;
