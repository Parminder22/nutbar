import { NextRequest, NextResponse } from "next/server";

/**
 * Contact form handler — writes submissions to Google Sheets
 * via a Google Apps Script Web App (no auth tokens needed)
 *
 * Setup steps are in README.md
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      console.error("GOOGLE_SCRIPT_URL is not set in environment variables");
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    // POST to Google Apps Script Web App
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "—",
        message,
        timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        source: "thenutbar.com",
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Apps Script error:", text);
      return NextResponse.json({ error: "Failed to save to sheet" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
