"use client";

import { useState } from "react";
import { generatePrompt } from "../_services/ai";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Function to handle sending the message
  const handleSend = async () => {
    if (input.trim()) {
      // Add user message to the chat
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");

      try {
        // Send the message to the backend for AI processing
        const response = await generatePrompt(input);

        // Add AI response to the chat
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response, sender: "ai" },
        ]);
      } catch (error) {
        console.error("Error fetching AI response:", error);
      }
    }
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="max-w-md w-full text-dark bg-white rounded-lg shadow-lg p-4 flex flex-col h-[400px]">
      <div className="flex-grow overflow-y-auto mb-4 space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg ${
                message.sender === "user"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              <span>{message.text}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message"
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleSend}
          className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
