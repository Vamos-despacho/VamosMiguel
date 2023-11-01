"use server"
import { Resend } from 'resend';

interface IResendContact {
    name: string;
    email: string;
    message: string


}

const sendEmail = ({ name, email, message }: IResendContact) => {
    const resend = new Resend(`${process.env.RESEND_API_KEY}`);
    console.log(name, email, message)
    try {
        resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'christhianjpp@gmail.com',
            subject: 'Email web - Vamos Miguel Ángel',
            html: `
            <p>Nombre: ${name}</p>
            <p>Email: ${email}</p>
            <p>Mensaje: ${message}</p>`
        });


    } catch (error) {

    }
}

export default sendEmail