import React, { useState } from "react";
import ChatForm from "../chatForm/ChatForm.jsx";
import "./chatWindow.css";

const ChatWindow = ({ visible }) => {
  const [name, setName] = useState("");

  return (
    <div className="chat-window" style={{ opacity: visible ? "1" : "0" }}>
      <ChatForm name={name} setName={setName} />
    </div>
  );
};

export default ChatWindow;
