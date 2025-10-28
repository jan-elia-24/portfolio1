import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); 

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "jan.elia995@hotmail.com",
      subject: `New message from ${name}`,
      html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
