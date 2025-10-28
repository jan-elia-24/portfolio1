import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const now = new Date().toLocaleString("en-GB", {
  timeZone: "Europe/Stockholm",
});

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
      html: `
    <h2>New message from your portfolio 💬</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong><br/>${message}</p>
    <hr/>
    <p style="color:#888; font-size:13px;">Received on ${now}</p>
  `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
