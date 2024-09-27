import { useState, useCallback } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY as string;

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
const chat = model.startChat();

interface Message {
  question: string;
  answer: string;
}

export const useChatLogic = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessageToAI = async (query: string, context: Message[]) => {
    const limitedContext = context.slice(-5);
    const contextMessages = limitedContext
      .map((msg) => `Q: ${msg.question}\nA: ${msg.answer}`)
      .join("\n");
    const fullQuery = `${contextMessages}\nQ: ${query}`;

    try {
      const result = await chat.sendMessage(fullQuery);
      return result.response?.text();
    } catch (error) {
      throw new Error("Error communicating with AI API");
    }
  };

  const handleSend = useCallback(
    async (query: string) => {
      if (!query.trim()) {
        throw new Error("The query cannot be empty.");
      }

      const newQuestion: Message = { question: query, answer: "" };
      setMessages((prevMessages) => [...prevMessages, newQuestion]);
      setIsLoading(true);

      try {
        const text = await sendMessageToAI(query, messages);
        if (text) {
          setMessages((prevMessages) =>
            prevMessages.map((msg, index) =>
              index === prevMessages.length - 1 ? { ...msg, answer: text } : msg
            )
          );
        }
      } catch (err) {
        throw new Error((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    },
    [messages]
  );

  return {
    messages,
    isLoading,
    handleSend,
  };
};
