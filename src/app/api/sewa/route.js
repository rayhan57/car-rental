import dbConnection from "@/config/database";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const conn = await dbConnection();
    const query = `
      SELECT
        sewa.id_sewa,
        customer.id_customer,
        sales.id_sales,
        customer.nama AS nama_customer,
        customer.alamat,
        customer.nomor_telepon,
        mobil.nomor_polisi,
        mobil.nama_mobil,
        mobil.tahun,
        sewa.tanggal_ambil,
        sewa.tanggal_kembali,
        sewa.total_harga,
        sales.nama AS nama_sales
      FROM
        sewa
        INNER JOIN customer ON customer.id_customer = sewa.id_customer
        INNER JOIN mobil ON mobil.nomor_polisi = sewa.nomor_polisi
        INNER JOIN sales ON sales.id_sales = sewa.id_sales
    `;
    const [sewa] = await conn.query(query);
    return NextResponse.json(sewa);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch sewa" });
  }
};

export const POST = async (request) => {
  try {
    const conn = await dbConnection();
    const body = await request.json();
    const query = "INSERT INTO sewa SET ?";
    const [sewa] = await conn.query(query, body);
    return NextResponse.json(sewa);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create sewa" });
  }
};
