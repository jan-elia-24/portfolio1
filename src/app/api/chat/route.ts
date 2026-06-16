import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const LIMIT = 10;
const WINDOW_MS = 60 * 60 * 1000;

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

const SYSTEM_PROMPT = `You are Jan Elia's portfolio assistant. Answer questions about Jan concisely and professionally. Only answer questions related to Jan's background, skills, projects, and availability. If asked about something unrelated, politely redirect to Jan's work.

About Jan Elia:
- Full-stack developer specialising in Java & JavaScript
- Graduated June 2026 from a System Developer programme (Java & JavaScript) at Lernia Yrkeshögskola
- Previously studied Construction Engineering at Uppsala University (2017–2019)
- LIA internship completed in WordPress development (Feb–May 2026)
- Based in Sweden
- Currently available for work opportunities

Skills:
Java, Spring Boot, Spring Security, JPA/Hibernate, JUnit, Mockito, Maven, Next.js, React, Angular, Tailwind CSS, Node.js, Express, C#, .NET 9, REST APIs, MongoDB, SQL, MySQL, Docker, Git/GitHub, CI/CD, Flyway

Projects:
- SveabyggpartnerAB: Professional client project, construction company website
- Washify: Car wash booking system — Spring Boot, Spring Security, Maven, JUnit, Mockito, JPA/Hibernate, Docker, MySQL, Flyway
- Portfolio: This portfolio site — Next.js, React, TypeScript, Tailwind CSS, Framer Motion
- BookBreeze: Full-stack book management app — Angular + .NET 9 API, JWT auth
- Wordle: Wordle clone — React, Node.js, Express, MongoDB
- Artist Booking Site: Artist booking platform

Contact: Use the contact form on the site to reach Jan directly.

Keep answers short (2-4 sentences max). Be friendly and professional. Respond in the same language the user writes in.`;

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please wait a while." }, { status: 429 });
  }

  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1]?.content as string;
    if (!lastMessage || lastMessage.length > 500) {
      return NextResponse.json({ error: "Message too long or empty" }, { status: 400 });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((m: { role: string; content: string }) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content ?? "I couldn't generate a response.";
    return NextResponse.json({ reply });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
