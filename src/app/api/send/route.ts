import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Email Web Contáctanos <onboarding@resend.dev>",
      to: ["despachomac9.1@gmail.com"],
      subject: "Vamos Miguel Ángel",
      html: `
            <p>Nombre: ${name}</p>
            <p>Email: ${email}</p>
            <p>Mensaje: ${message}</p>`,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error });
  }
}
