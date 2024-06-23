import dbConnection from "@/config/database";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const nopol = params.nopol;

  try {
    const conn = await dbConnection();
    const query = "SELECT * FROM mobil WHERE nomor_polisi = ?";
    const [cars] = await conn.query(query, nopol);
    return NextResponse.json(cars);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch car" });
  }
};

export const PUT = async (request, { params }) => {
  const nopol = params.nopol;

  try {
    const conn = await dbConnection();
    const body = await request.json();
    const query = "UPDATE mobil SET ? WHERE nomor_polisi = ?";
    const [cars] = await conn.query(query, [body, nopol]);
    return NextResponse.json(cars);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to update car" });
  }
};

export const DELETE = async (request, { params }) => {
  const nopol = params.nopol;

  try {
    const conn = await dbConnection();
    const query = "DELETE FROM mobil WHERE nomor_polisi = ?";
    const [cars] = await conn.query(query, nopol);
    return NextResponse.json(cars);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to delete car" });
  }
};
