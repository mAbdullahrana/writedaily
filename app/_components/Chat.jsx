"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { generatePrompt } from "../_services/ai";
import SpinnerMini from "./SpinnerMini";

const LOCAL_STORAGE_KEY = "chatMessages";

function Chat() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMessages = localStorage.getItem(LOCAL_STORAGE_KEY);
      return savedMessages ? JSON.parse(savedMessages) : [];
    }
    return [];
  });

  const modes = [
    "Give me a writing prompt",
    "Give me a poem prompt",
    "Give me a story prompt",
    "Give me a journaling prompt",
    "Give me a creative prompt",
  ];
  const [selectedMode, setSelectedMode] = useState(modes[0]);
  const [showModes, setShowModes] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  const handleSend = async () => {
    const basePrompt = `${selectedMode}`;
    const newMessages = [...messages, { text: basePrompt, sender: "user" }];
    setMessages(newMessages);

    try {
      setIsLoading(true);
      const response = await generatePrompt(basePrompt);
      setMessages([...newMessages, { text: response, sender: "ai" }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-full w-full text-white bg-dark rounded-lg shadow-lg p-4 flex flex-col h-[500px]">
      {/* Mode selection */}
      <div className="mb-4">
        {/* Desktop Mode Buttons */}
        <div className="hidden md:flex flex-wrap gap-2">
          {modes.map((mode) => (
            <button
              key={mode}
              onClick={() => setSelectedMode(mode)}
              className={`px-4 py-2 rounded-lg border ${
                selectedMode === mode
                  ? "bg-primaryButton text-white border-primaryButton"
                  : "bg-secondary text-white border-lightgray"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex md:hidden justify-between items-center border-b pb-2">
          <span className="text-sm font-medium">{selectedMode}</span>
          <button onClick={() => setShowModes(!showModes)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {showModes && (
          <div className="mt-2 flex flex-col gap-2 md:hidden">
            {modes.map((mode) => (
              <button
                key={mode}
                onClick={() => {
                  setSelectedMode(mode);
                  setShowModes(false);
                }}
                className={`px-4 py-2 rounded-lg border ${
                  selectedMode === mode
                    ? "bg-primaryButton text-white border-primaryButton"
                    : "bg-secondary text-white border-lightgray"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Chat messages */}
      <div className="flex-grow overflow-y-auto mb-4 space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-1 rounded-lg max-w-[80%] ${
                message.sender === "user"
                  ? "bg-primaryButton text-white"
                  : "bg-gray-200 text-dark"
              }`}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h1 className="text-2xl font-bold my-2" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-xl font-bold my-2" {...props} />
                  ),
                  p: ({ node, ...props }) => <p className="my-2" {...props} />,
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc ml-5 my-2" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="my-1" {...props} />
                  ),
                }}
              >
                {message.text}
              </ReactMarkdown>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="px-4 py-1 rounded-lg max-w-[80%] bg-gray-200 text-dark">
              <SpinnerMini />
            </div>
          </div>
        )}
      </div>

      {/* Generate Prompt Button */}
      <div className="flex items-center justify-center">
        <button
          onClick={handleSend}
          className="w-full bg-primaryButton text-white hover:bg-primaryButtonHover text-[0.9rem] transition py-2 px-4 rounded-xl flex gap-2 items-center justify-center disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-300"
        >
          Generate Prompt
        </button>
      </div>
    </div>
  );
}

export default Chat;
