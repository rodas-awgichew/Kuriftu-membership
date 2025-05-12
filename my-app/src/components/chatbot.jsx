import React, { useState } from "react";
import axios from "axios";
import BackButton from "./BackButton";

function Chatbot() {
  const [messages, setMessages] = useState([]); // Store conversation messages
  const [message, setMessage] = useState(""); // User input state
  const [error, setError] = useState(null); // Error state

  // Handle input changes
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  // Function to send message and get AI response
  const sendMessage = async () => {
    if (!message.trim()) return; // Prevent empty messages

    // Add user message to chat
    const userMessage = { role: "user", text: message };
    setMessages([...messages, userMessage]);

    try {
      const result = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "google/gemini-2.5-pro-exp-03-25:free",
          messages: [{ role: "user", content: [{ type: "text", text: message }] }],
        },
        {
          headers: {
            Authorization: "sk-or-v1-xxxxx", // Replace with your actual API key
            "Content-Type": "application/json",
          },
        }
      );

      // Add AI response to chat
      const aiMessage = { role: "bot", text: result.data.choices[0].message.content };
      setMessages([...messages, userMessage, aiMessage]);
    } catch (err) {
      setError(err.message);
    }

    setMessage(""); // Clear input after sending
  };

  return (
    
    <div className="bg-gray-100 h-screen w-screen flex items-center justify-center">
   <div className="absolute top-6 left-6">
          <BackButton />
        </div>
     
      <div className="bg-white rounded-lg shadow-md w-full max-w-4xl h-[90vh] mx-auto p-6 flex flex-col">
      
        {/* Chat Header */}
        <div className="text-2xl font-semibold mb-4 text-center">Dinknesh Chatbot</div>

        {/* Chat Messages (Scrollable Area) */}
        <div className="flex-grow overflow-y-auto p-4 bg-gray-50 rounded-lg max-h-[75vh]">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`p-3 max-w-xl rounded-lg ${
                  msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="mt-4 flex items-center border rounded-full px-3 py-3 bg-gray-50">
          <input
            type="text"
            value={message}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-grow bg-transparent border-none outline-none placeholder-gray-500 text-lg"
          />
          <span className="text-purple-600 cursor-pointer ml-2 text-2xl" onClick={sendMessage}>
            &#x27A4; {/* Send Icon */}
          </span>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 rounded-lg p-4 mt-4 text-red-600">
            <h2 className="text-lg font-semibold">Error:</h2>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chatbot;