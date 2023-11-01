
import { Resend } from 'resend';

interface IResendContact {
  name: FormDataEntryValue;
  email: FormDataEntryValue;
  message: FormDataEntryValue;


}

const ResendContact = ({ name, email, message }: IResendContact) => {
  const resend = new Resend(`${process.env.RESEND_API_KEY}`);
  console.log(`${process.env.RESEND_API_KEY}`)
  try {
    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'christhianjpp@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });

  } catch (error) {

  }
}

export default ResendContact