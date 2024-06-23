import { formatToRupiah } from "@/utils/formatNumber";
import Link from "next/link";
import React from "react";

const CarsTable = ({ data }) => {
  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full text-nowrap text-left text-sm lg:text-base">
        <thead className="border-b font-medium">
          <tr>
            <td className="px-4 py-2">No</td>
            <td className="px-4 py-2">Nomor Polisi</td>
            <td className="px-4 py-2">Nama Mobil</td>
            <td className="px-4 py-2">Tahun</td>
            <td className="px-4 py-2">Harga Sewa</td>
            <td className="px-4 py-2">Status</td>
          </tr>
        </thead>
        <tbody>
          {data.map((car, index) => (
            <tr key={index} className="border-b last:border-b-0">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{car.nomor_polisi}</td>
              <td className="px-4 py-2">{car.nama_mobil}</td>
              <td className="px-4 py-2">{car.tahun}</td>
              <td className="px-4 py-2">{formatToRupiah(car.harga_sewa)}</td>
              <td className="px-4 py-2">
                <span
                  className={`${car.status === "Tersedia" ? "border-green-500 bg-green-200 text-green-700" : "border-yellow-500 bg-yellow-200 text-yellow-700"} rounded-md border p-1`}
                >
                  {car.status}
                </span>
              </td>
              <td>
                <Link
                  href={`/cars/${car.nomor_polisi}`}
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

export default CarsTable;
