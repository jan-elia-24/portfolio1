import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limiter: max 3 requests per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const LIMIT = 3;
const WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= LIMIT) return true;
  entry.count++;
  return false;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests" },
      { status: 429 }
    );
  }

  try {
    const data = await req.formData();
    const name = (data.get("name") as string | null)?.trim();
    const email = (data.get("email") as string | null)?.trim();
    const message = (data.get("message") as string | null)?.trim();

    if (!name || name.length < 2 || name.length > 100) {
      return NextResponse.json({ ok: false, error: "Invalid name" }, { status: 400 });
    }
    if (!email || !isValidEmail(email) || email.length > 254) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }
    if (!message || message.length < 5 || message.length > 5000) {
      return NextResponse.json({ ok: false, error: "Invalid message" }, { status: 400 });
    }

    const now = new Date().toLocaleString("en-GB", { timeZone: "Europe/Stockholm" });

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "jan.elia995@hotmail.com",
      subject: `New message from ${name}`,
      html: `
        <h2>New message from your portfolio 💬</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
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
