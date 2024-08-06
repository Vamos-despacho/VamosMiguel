


import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();


        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const reason = formData.get('reason') as string;
        const comments = formData.get('comments') as string;
        const format = formData.get('format') as string;



        // Enviar correo con archivo adjunto usando Resend
        const data = await resend.emails.send({
            from: 'Email Web Solicitar Reunión <onboarding@resend.dev>',
            to: ['christhianjpp@gmail.com'],
            subject: 'Vamos Miguel Ángel',
            html: `
                <p>Nombre: ${name}</p>
                <p>Teléfono: ${phone}</p>
                <p>Email: ${email}</p>
                <p>Motivo: ${reason}</p>
                <p>Formato de reunión: ${format}</p>
                <p>Comentarios: ${comments}</p>
                `
        });

        // Retornar la respuesta como JSON
        return NextResponse.json(data);

    } catch (error) {
        console.error('Error al procesar el formulario:', error);
        return NextResponse.json({ error: 'Error al procesar el formulario.' }, { status: 500 });
    }
}
