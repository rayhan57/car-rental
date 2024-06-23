import dbConnection from "@/config/database";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const id = params.id;

  try {
    const conn = await dbConnection();
    const query = "SELECT * FROM sewa WHERE id_sewa = ?";
    const [sewa] = await conn.query(query, id);
    return NextResponse.json(sewa);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch sewa" });
  }
};

export const PUT = async (request, { params }) => {
  const id = params.id;

  try {
    const conn = await dbConnection();
    const body = await request.json();
    const query = "UPDATE sewa SET ? WHERE id_sewa = ?";
    const [sewa] = await conn.query(query, [body, id]);
    return NextResponse.json(sewa);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to update sewa" });
  }
};

export const DELETE = async (request, { params }) => {
  const id = params.id;

  try {
    const conn = await dbConnection();
    const query = "DELETE FROM sewa WHERE id_sewa = ?";
    const [sewa] = await conn.query(query, id);
    return NextResponse.json(sewa);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to delete sewa" });
  }
};
