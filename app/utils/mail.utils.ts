import nodemailer, { Transporter } from "nodemailer";

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
}

const transporter: Transporter<any> = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL as string,
    pass: process.env.NODEMAILER_PW as string,
  },
});

const sendEmail = async (
  to: string,
  subject: string,
  text: string
): Promise<void> => {
  const mailOptions: MailOptions = {
    from: process.env.NODEMAILER_EMAIL as string,
    to: process.env.NODEMAILER_EMAIL as string,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
