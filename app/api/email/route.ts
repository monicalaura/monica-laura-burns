// app/email.ts

import { NextRequest, NextResponse } from "next/server";
import sendEmail from "../../utils/mail.utils";

export async function POST(request: NextRequest) {
  try {
    const { to, subject, text } = await request.json();
    await sendEmail(to, subject, text);
    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
