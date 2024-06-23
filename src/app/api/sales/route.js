import dbConnection from "@/config/database";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const conn = await dbConnection();
    const query = "SELECT * FROM sales";
    const [sales] = await conn.query(query);
    return NextResponse.json(sales);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch sales" });
  }
};

export const POST = async (request) => {
  try {
    const conn = await dbConnection();
    const body = await request.json();
    const query = "INSERT INTO sales SET ?";
    const [sales] = await conn.query(query, body);
    return NextResponse.json(sales);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create sale" });
  }
};
