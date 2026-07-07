import { NextRequest, NextResponse } from "next/server";

const mockQuestions = [
  "That sounds interesting. Could you walk me through a time when you had to overcome a significant technical challenge?",
  "How do you prioritize tasks when you have multiple tight deadlines?",
  "Can you describe a situation where you disagreed with a team member or manager? How did you handle it?",
  "What is your approach to learning a new technology or framework?",
  "Where do you see your career heading in the next few years?",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { history, config } = body;

    // Simulate network delay for realism
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!history || history.length === 0) {
      // Initial greeting
      return NextResponse.json({
        message: `Hello! I'm your AI Interviewer. I see you're applying for the ${config.role} role. Let's start with a simple question: Can you tell me a little bit about yourself and your background?`,
      });
    }

    // Pick a random follow-up question
    const randomQuestion = mockQuestions[Math.floor(Math.random() * mockQuestions.length)];

    return NextResponse.json({
      message: `Thanks for sharing that. ${randomQuestion}`,
    });
  } catch (error: any) {
    console.error("Interview API Error:", error);
    return NextResponse.json({ error: "Failed to process interview message" }, { status: 500 });
  }
}
