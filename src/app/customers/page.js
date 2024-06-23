import Customers from "@/components/customersPage/Customers";
import { getCustomers } from "@/libs/fetchingApi";
import React from "react";

const CustomerPage = async () => {
  const customers = await getCustomers();

  return (
    <div className="container mt-5 lg:mt-10">
      <h1 className="text-xl font-semibold lg:text-2xl">Daftar Customer</h1>

      <Customers customersData={customers} />
    </div>
  );
};

export default CustomerPage;
