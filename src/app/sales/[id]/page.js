import EditSales from "@/components/editSalesPage/EditSales";
import { getSalesById } from "@/libs/fetchingApi";
import React from "react";

const EditSalesPage = async ({ params }) => {
  const { id } = params;
  const sales = await getSalesById(id);

  return (
    <div className="container mt-5 lg:mt-10">
      <h1 className="text-xl lg:text-2xl">
        Edit Sales: <span className="font-medium">{sales.nama}</span>
      </h1>

      <EditSales data={sales} />
    </div>
  );
};

export default EditSalesPage;
