import dbConnection from "@/config/database";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const id = params.id;

  try {
    const conn = await dbConnection();
    const query = "SELECT * FROM customer WHERE id_customer = ?";
    const [customers] = await conn.query(query, id);
    return NextResponse.json(customers);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch customer" });
  }
};

export const PUT = async (request, { params }) => {
  const id = params.id;

  try {
    const conn = await dbConnection();
    const body = await request.json();
    const query = "UPDATE customer SET ? WHERE id_customer = ?";
    const [customers] = await conn.query(query, [body, id]);
    return NextResponse.json(customers);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to update customer" });
  }
};

export const DELETE = async (request, { params }) => {
  const id = params.id;

  try {
    const conn = await dbConnection();
    const query = "DELETE FROM customer WHERE id_customer = ?";
    const [customers] = await conn.query(query, id);
    return NextResponse.json(customers);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to delete customer" });
  }
};
