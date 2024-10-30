import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  "articulo meta";
  try {
    const query = new URL(req.url).searchParams;
    const slug = query.get("slug"); // Obtenemos el valor del parámetro "slug"
    console.log(slug);

    return new Response(JSON.stringify({}), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Error interno del servidor", { status: 500 });
  }
}
