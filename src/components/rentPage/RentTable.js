import { formatDate } from "@/utils/formatDate";
import { formatToRupiah } from "@/utils/formatNumber";
import Link from "next/link";
import React from "react";

const RentTable = ({ data }) => {
  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full text-nowrap text-left text-sm lg:text-base">
        <thead className="border-b font-medium">
          <tr>
            <td className="px-4 py-2">No</td>
            <td className="px-4 py-2">Nama Customer</td>
            <td className="px-4 py-2">Alamat</td>
            <td className="px-4 py-2">Nomor Telepon</td>
            <td className="px-4 py-2">Nomor Polisi</td>
            <td className="px-4 py-2">Nama Mobil</td>
            <td className="px-4 py-2">Tahun</td>
            <td className="px-4 py-2">Tanggal Ambil</td>
            <td className="px-4 py-2">Tanggal Kembali</td>
            <td className="px-4 py-2">Harga Sewa</td>
            <td className="px-4 py-2">Nama Sales</td>
          </tr>
        </thead>
        <tbody>
          {data.map((rent, index) => (
            <tr key={index} className="border-b last:border-b-0">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{rent.nama_customer}</td>
              <td className="px-4 py-2">{rent.alamat}</td>
              <td className="px-4 py-2">{rent.nomor_telepon}</td>
              <td className="px-4 py-2">{rent.nomor_polisi}</td>
              <td className="px-4 py-2">{rent.nama_mobil}</td>
              <td className="px-4 py-2">{rent.tahun}</td>
              <td className="px-4 py-2">{formatDate(rent.tanggal_ambil)}</td>
              <td className="px-4 py-2">{formatDate(rent.tanggal_kembali)}</td>
              <td className="px-4 py-2">{formatToRupiah(rent.total_harga)}</td>
              <td className="px-4 py-2">{rent.nama_sales}</td>
              <td>
                <Link
                  href={`/rent/${rent.id_sewa}`}
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

export default RentTable;
