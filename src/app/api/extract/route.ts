import { NextRequest, NextResponse } from "next/server";
const pdf = require("pdf-parse");

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    
    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = await file.arrayBuffer();
    
    let text = "";
    if (file.type === "application/pdf") {
      const data = await pdf(Buffer.from(buffer));
      text = data.text;
    } else {
      // For now, if it's not a PDF, we'll just fall back to a mock string since docx parsing is complex without external APIs.
      text = "This is a placeholder for DOCX files. To see actual extraction, please upload a PDF.";
    }

    return NextResponse.json({ text, success: true });
  } catch (error: any) {
    console.error("Extraction error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
