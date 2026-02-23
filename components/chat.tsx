"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import {
  MessageSquare,
  X,
  Send,
  Loader2,
  ChevronDown,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
    });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) form.requestSubmit();
    }
  };

  if (!isMounted) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <Card className="w-[350px] sm:w-[400px] h-[500px] flex flex-col shadow-xl border-neutral-200 overflow-hidden">
              <div className="p-4 border-b flex items-center justify-between bg-gradient-to-r from-violet-500 to-purple-600 text-white">
                <div className="flex items-center gap-2">
                  <Bot size={20} />
                  <h3 className="font-semibold">Chat Assistant</h3>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleChat}
                  className="text-white hover:bg-white/20"
                >
                  <X size={18} />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50">
                {messages.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-4 text-neutral-500">
                    <Bot size={40} className="mb-4 text-violet-500" />
                    <h3 className="font-medium text-lg text-neutral-700">
                      How can I help you today?
                    </h3>
                    <p className="text-sm mt-2">
                      Ask me anything about this website or any other questions
                      you might have.
                    </p>
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex flex-col max-w-[85%] rounded-lg p-3",
                        message.role === "user"
                          ? "ml-auto bg-violet-500 text-white"
                          : "bg-white border border-neutral-200 text-neutral-800"
                      )}
                    >
                      <span className="text-xs opacity-70 mb-1">
                        {message.role === "user" ? "You" : "Assistant"}
                      </span>
                      <div className="whitespace-pre-wrap">
                        {message.content}
                      </div>
                    </div>
                  ))
                )}
                {isLoading && (
                  <div className="flex items-center gap-2 bg-white border border-neutral-200 text-neutral-800 max-w-[85%] rounded-lg p-3">
                    <Loader2
                      size={16}
                      className="animate-spin text-violet-500"
                    />
                    <span className="text-sm">Thinking...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-3 border-t bg-white">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Textarea
                    ref={inputRef}
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="min-h-[44px] max-h-[120px] resize-none"
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={isLoading || !input.trim()}
                    className="bg-violet-500 hover:bg-violet-600 h-[44px] w-[44px]"
                  >
                    {isLoading ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <Send size={18} />
                    )}
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={isOpen ? { rotate: 0 } : { rotate: 0 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={toggleChat}
          size="icon"
          className={cn(
            "h-14 w-14 rounded-full shadow-lg",
            isOpen
              ? "bg-neutral-200 hover:bg-neutral-300 text-neutral-700"
              : "bg-violet-500 hover:bg-violet-600 text-white"
          )}
        >
          {isOpen ? <ChevronDown size={24} /> : <MessageSquare size={24} />}
        </Button>
      </motion.div>
    </div>
  );
}
