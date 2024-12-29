import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ChatMessage from "../chatMessage/ChatMessage";
import "./chatForm.css";

const ChatForm = ({ name, setName }) => {
  const [showChat, setShowChat] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowChat(true);
    console.log("connect", name);
  };

  return (
    <>
      {showChat ? (
        <ChatMessage name={name} setName={setName} />
      ) : (
        <div
          className="container-form"
          style={{ opacity: isLoading ? "0.33" : "1" }}
        >
          <div className="loading">
            {isLoading && (
              <ClipLoader color="var(--red-sharp-color)" size={60} />
            )}
          </div>
          <div className="form-wrapper">
            <div className="top-text">
              Welcome to my <br /> chat
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name.."
                required
              />
            </form>
            <div className="form-bottom-text">
              <p>
                Enter your name <br /> to get started
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatForm;
