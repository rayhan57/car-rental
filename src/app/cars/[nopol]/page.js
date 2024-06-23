import EditCar from "@/components/editCarPage/EditCar";
import { getCarByNopol } from "@/libs/fetchingApi";
import React from "react";

const EditCarPage = async ({ params }) => {
  const nopol = params.nopol;
  const decodeNopol = decodeURIComponent(nopol);
  const car = await getCarByNopol(decodeNopol);

  return (
    <div className="container mt-5 lg:mt-10">
      <h1 className="text-xl lg:text-2xl">
        Edit nomor polisi: <span className="font-medium">{decodeNopol}</span>
      </h1>

      <EditCar data={car} />
    </div>
  );
};

export default EditCarPage;
