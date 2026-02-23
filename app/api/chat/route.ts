import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // This is a placeholder for your actual implementation
  // You'll need to set up your OpenAI API key in your environment variables
  const result = streamText({
    model: openai("gpt-4o-mini"),
    system: `You are a helpful assistant for a personal website. 
    You have access to a knowledge base about the website owner and their work.
    Be concise, friendly, and helpful.`,
    messages,
  });

  return result.toDataStreamResponse();
}
