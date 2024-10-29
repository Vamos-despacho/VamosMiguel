import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const query = new URL(req.url).searchParams;
    console.log(query);
    return new Response(JSON.stringify({}), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Error interno del servidor", { status: 500 });
  }
}
