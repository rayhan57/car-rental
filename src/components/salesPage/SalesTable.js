import Link from "next/link";
import React from "react";

const SalesTable = ({ data }) => {
  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full text-nowrap text-left text-sm lg:text-base">
        <thead className="border-b font-medium">
          <tr>
            <td className="px-4 py-2">No</td>
            <td className="px-4 py-2">Nama</td>
            <td className="px-4 py-2">Nomor Telepon</td>
            <td className="px-4 py-2">Email</td>
          </tr>
        </thead>
        <tbody>
          {data.map((sales, index) => (
            <tr key={index} className="border-b last:border-b-0">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{sales.nama}</td>
              <td className="px-4 py-2">{sales.nomor_telepon}</td>
              <td className="px-4 py-2">{sales.email}</td>
              <td>
                <Link
                  href={`/sales/${sales.id_sales}`}
                  className="font-medium text-primary hover:underline"
                >
                  EDIT
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
