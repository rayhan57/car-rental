import dbConnection from "@/config/database";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const conn = await dbConnection();
    const query = "SELECT * FROM customer";
    const [customers] = await conn.query(query);
    return NextResponse.json(customers);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch customers" });
  }
};

export const POST = async (request) => {
  try {
    const conn = await dbConnection();
    const body = await request.json();
    const query = "INSERT INTO customer SET ?";
    const [customers] = await conn.query(query, body);
    return NextResponse.json(customers);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create customer" });
  }
};
