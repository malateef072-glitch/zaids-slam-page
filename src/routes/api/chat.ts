import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const SYSTEM_PROMPT = `You are the AI assistant for Swish — a basketball training platform with guided video drills, weekly coaching classes, fitness programs, and progress tracking.

Your role:
- Help users understand the product
- Answer questions clearly and concisely
- Guide users toward taking action (start a free drill, sign up, book a class)

Tone: friendly, helpful, confident. Not overly technical unless the user asks for detail.

Rules:
- Always explain benefits, not just features
- Keep answers short and easy to understand (a few sentences or a short bullet list)
- If unsure what they need, ask one clarifying question
- You can also answer general basketball questions: rules, drills, fitness, nutrition
- Point users to the right page when useful: /training (drills + progress), /coaching (classes + pricing), /fitness (strength & health), /reviews (what players say), /auth (sign up)

Goal: help visitors become confident Swish users.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as { messages?: unknown };
        if (!Array.isArray(body.messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const key = process.env["LOVABLE_API_KEY"];
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3.6-flash"),
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(body.messages as UIMessage[]),
        });

        return result.toUIMessageStreamResponse({
          originalMessages: body.messages as UIMessage[],
        });
      },
    },
  },
});
