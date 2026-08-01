import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";

function BallIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2.5 12h19M12 2.5v19M5 5c4 3 4 11 0 14M19 5c-4 3-4 11 0 14" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    id: "hoops-support",
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (open) textareaRef.current?.focus();
  }, [open, status]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    void sendMessage({ text });
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 z-[60] flex h-[70vh] max-h-[520px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-flame/25 bg-onyx/95 shadow-2xl backdrop-blur-xl sm:right-6">
          <div className="flex items-center justify-between gap-2 border-b border-flame/15 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-flame text-flame-foreground">
                <BallIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg leading-none tracking-wider text-foreground">Ask Coach</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/50">
                  Rules · Drills · Anything
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full px-2 py-1 text-foreground/60 transition-colors hover:bg-flame/10 hover:text-flame"
            >
              ✕
            </button>
          </div>

          <Conversation className="flex-1">
            <ConversationContent className="gap-3">
              {messages.length === 0 && (
                <div className="rounded-xl border border-flame/15 bg-flame/5 p-4 text-sm text-foreground/70">
                  Hey! Ask me anything — basketball rules, drill ideas, class schedules, or fitness tips.
                </div>
              )}
              {messages.map((message) => (
                <Message key={message.id} from={message.role}>
                  <MessageContent>
                    {message.parts.map((part, i) =>
                      part.type === "text" ? (
                        <MessageResponse key={i}>{part.text}</MessageResponse>
                      ) : null,
                    )}
                  </MessageContent>
                </Message>
              ))}
              {status === "submitted" && <Shimmer className="text-sm">Thinking...</Shimmer>}
              {error && (
                <p className="text-sm text-destructive">
                  Coach couldn't answer that right now. Please try again in a moment.
                </p>
              )}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>

          <div className="border-t border-flame/15 p-3">
            <PromptInput onSubmit={submit}>
              <PromptInputTextarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about rules, drills, coaching…"
              />
              <PromptInputFooter className="justify-end">
                <PromptInputSubmit status={status} disabled={!input.trim() && !busy} />
              </PromptInputFooter>
            </PromptInput>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-5 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-flame text-flame-foreground shadow-xl transition-transform hover:scale-110 sm:right-6"
      >
        {open ? <span className="text-xl">✕</span> : <BallIcon className="h-7 w-7" />}
      </button>
    </>
  );
}
