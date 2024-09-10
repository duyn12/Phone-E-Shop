'use client'
import { SetStateAction, useState } from "react";
import { X } from "lucide-react";

export default function ChatLive() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! How can I assist you today?",
      sender: "bot",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
    {
      text: "Hello! I need a Chatbot!",
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages([
        ...messages,
        {
          text: newMessage,
          sender: "user",
          time: currentTime,
        },
      ]);
      setNewMessage("");
      // Giả sử bạn muốn bot phản hồi tự động ngay lập tức
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Thank you for your message!",
            sender: "bot",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      }, 1500); // Bot phản hồi sau 1 giây
    }
  };

  return (
    <>
      <div
        className={`max-w-[320px] bg-white z-40 left-[80%] bottom-0 sticky shadow-xl rounded-lg overflow-hidden ${
          isChatOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col h-[400px]">
          <div className="px-4 py-3 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-zinc-800">
                Chat với nhân viên tư vấn
              </h2>
              <X
                className="hover:text-red-700 cursor-pointer"
                onClick={toggleChat}
              />
            </div>
          </div>
          <div
            className="flex-1 p-3 overflow-y-auto flex flex-col space-y-2"
            id="chatDisplay"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${
                  message.sender === "user"
                    ? "self-end bg-red-500"
                    : "self-start bg-zinc-500"
                } text-white max-w-xs rounded-lg px-3 py-1.5 text-sm`}
              >
                <div>{message.text}</div>
                <div className="text-xs text-zinc-300 mt-1 text-right">
                  {message.time}
                </div>
              </div>
            ))}
          </div>
          <div className="px-3 py-2 border-t">
            <div className="flex gap-2">
              <input
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg text-sm"
                id="chatInput"
                type="text"
                value={newMessage}
                onChange={handleInputChange}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
              />
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 ease-in-out text-sm"
                id="sendButton"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`px-4 py-1 border-b rounded-t-lg max-w-[320px] bg-red-500 z-40 left-[80%] bottom-0 sticky shadow-xl cursor-pointer ${
          isChatOpen ? "hidden" : "block"
        }`}
        onClick={toggleChat}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-white">
            Chat với nhân viên tư vấn
          </h2>
        </div>
      </div>
    </>
  );
}
