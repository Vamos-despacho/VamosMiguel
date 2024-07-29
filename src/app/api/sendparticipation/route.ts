


import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const description = formData.get('description') as string;
        const phone = formData.get('phone') as string;
        const title = formData.get('title') as string;
        const justification = formData.get('justification') as string;
        const area = formData.get('area') as string;
        const comments = formData.get('comments') as string;
        const file = formData.get('file') as File | null;
        console.log('file', file)

        // Verificar si se ha adjuntado un archivo
        if (file?.size !== 0 && file) {
            // Leer el contenido del archivo adjunto
            const fileBuffer = await file.arrayBuffer();
            const fileContent = Buffer.from(fileBuffer);

            // Enviar correo con archivo adjunto usando Resend
            const data = await resend.emails.send({
                from: 'Email Web Participación Ciudadana <onboarding@resend.dev>',
                to: ['christhianjpp@gmail.com'],
                subject: 'Vamos Miguel Ángel',
                html: `
                <p>Nombre: ${name}</p>
                <p>Teléfono: ${phone}</p>
                <p>Email: ${email}</p>
                <p>Título: ${title}</p>
                <p>Descripción: ${description}</p>
                <p>Justificación: ${justification}</p>
                <p>Área: ${area}</p>
                <p>Comentarios: ${comments}</p>
                `,
                attachments: [{
                    filename: file.name,
                    content: fileContent,
                    contentType: file.type || 'application/octet-stream', // Tipo MIME del archivo
                } as any]

            });

            // Retornar la respuesta como JSON
            return NextResponse.json(data);
        } else {
            // No se adjuntó ningún archivo, enviar solo los datos del formulario sin adjunto
            const data = await resend.emails.send({
                from: 'Email Web Participación Ciudadana <onboarding@resend.dev>',
                to: ['christhianjpp@gmail.com'],
                subject: 'Vamos Miguel Ángel',
                html: `
                <p>Nombre: ${name}</p>
                <p>Teléfono: ${phone}</p>
                <p>Email: ${email}</p>
                <p>Título: ${title}</p>
                <p>Descripción: ${description}</p>
                <p>Justificación: ${justification}</p>
                <p>Área: ${area}</p>
                <p>Comentarios: ${comments}</p>
                `,
            });

            // Retornar la respuesta como JSON
            return NextResponse.json(data);
        }
    } catch (error) {
        console.error('Error al procesar el formulario:', error);
        return NextResponse.json({ error: 'Error al procesar el formulario.' }, { status: 500 });
    }
}
