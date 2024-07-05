import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Style components using Tailwind CSS
import "./App.css";
import ChatHistory from "./component/ChatHistory";
import Loading from "./component/Loading";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle user input
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  // Function to send user message to Gemini
  const sendMessage = async () => {};

  // Function to clear the chat history
  const clearChat = () => {};

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Chatbot</h1>
      {(!chatHistory || isLoading) && (
        <div className="chat-container rounded-lg shadow-md p-4">
          <ChatHistory chatHistory={chatHistory} />
          <Loading isLoading={isLoading} />
        </div>
      )}

      <div className="flex mt-4">
        <input
          type="text"
          className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={userInput}
          onChange={handleUserInput}
        />
        <button
          className="px-4 py-2 ml-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
          onClick={sendMessage}
          disabled={isLoading}
        >
          Send
        </button>
      </div>
      <button
        className="mt-4 block px-4 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500 focus:outline-none"
        onClick={clearChat}
      >
        Clear Chat
      </button>
    </div>
  );
};

export default App;
