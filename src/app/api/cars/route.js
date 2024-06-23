import dbConnection from "@/config/database";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const conn = await dbConnection();
    const query = "SELECT * FROM mobil ORDER BY timestamp";
    const [cars] = await conn.query(query);
    return NextResponse.json(cars);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch cars" });
  }
};

export const POST = async (request) => {
  try {
    const conn = await dbConnection();
    const body = await request.json();
    const query = "INSERT INTO mobil SET ?";
    const [cars] = await conn.query(query, body);
    return NextResponse.json(cars);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create car" });
  }
};
