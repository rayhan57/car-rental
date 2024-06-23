import AddRent from "@/components/addRentPage/AddRent";
import { getCars, getCustomers, getRent, getSales } from "@/libs/fetchingApi";
import React from "react";

const AddRentPage = async () => {
  const rents = await getRent();
  const customers = await getCustomers();
  const cars = await getCars();
  const sales = await getSales();

  const availableCustomers = customers.filter(
    (customer) =>
      !rents.some((rent) => rent.id_customer === customer.id_customer),
  );
  const availableCars = cars.filter(
    (car) => !rents.some((rent) => rent.nomor_polisi === car.nomor_polisi),
  );

  return (
    <AddRent
      availableCustomers={availableCustomers}
      availableCars={availableCars}
      availableSales={sales}
    />
  );
};

export default AddRentPage;
