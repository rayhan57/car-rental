import EditCustomer from "@/components/editCustomerPage/EditCustomer";
import { getCustomerById } from "@/libs/fetchingApi";
import React from "react";

const EditCustomerPage = async ({ params }) => {
  const id = params.id;
  const customer = await getCustomerById(id);

  return (
    <div className="container mt-5 lg:mt-10">
      <h1 className="text-xl lg:text-2xl">
        Edit Customer: <span className="font-medium">{customer.nama}</span>
      </h1>

      <EditCustomer data={customer} />
    </div>
  );
};

export default EditCustomerPage;
