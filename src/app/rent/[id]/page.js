import EditRent from "@/components/editRentPage/EditRent";
import {
  getCarByNopol,
  getCars,
  getCustomerById,
  getRent,
  getRentById,
  getSalesById,
} from "@/libs/fetchingApi";
import React from "react";

const EditRentPage = async ({ params }) => {
  const { id } = params;
  const [rents, currentRent, cars] = await Promise.all([
    getRent(),
    getRentById(id),
    getCars(),
  ]);

  const [customer, car, sales] = await Promise.all([
    getCustomerById(currentRent.id_customer),
    getCarByNopol(currentRent.nomor_polisi),
    getSalesById(currentRent.id_sales),
  ]);

  const availableCars = cars.filter(
    (car) => !rents.some((rent) => rent.nomor_polisi === car.nomor_polisi),
  );

  return (
    <div className="container mt-5 lg:mt-10">
      <h1 className="text-xl lg:text-2xl">Edit Daftar Penyewaan</h1>

      <EditRent
        data={currentRent}
        customerData={customer}
        carData={[...availableCars, car]}
        salesData={sales}
      />
    </div>
  );
};

export default EditRentPage;
