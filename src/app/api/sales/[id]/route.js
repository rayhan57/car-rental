import dbConnection from "@/config/database";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const id = params.id;

  try {
    const conn = await dbConnection();
    const query = "SELECT * FROM sales WHERE id_sales = ?";
    const [sales] = await conn.query(query, id);
    return NextResponse.json(sales);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch sale" });
  }
};

export const PUT = async (request, { params }) => {
  const id = params.id;

  try {
    const conn = await dbConnection();
    const body = await request.json();
    const query = "UPDATE sales SET ? WHERE id_sales = ?";
    const [sales] = await conn.query(query, [body, id]);
    return NextResponse.json(sales);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to update sale" });
  }
};

export const DELETE = async (request, { params }) => {
  const id = params.id;

  try {
    const conn = await dbConnection();
    const query = "DELETE FROM sales WHERE id_sales = ?";
    const [sales] = await conn.query(query, id);
    return NextResponse.json(sales);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to delete sale" });
  }
};
