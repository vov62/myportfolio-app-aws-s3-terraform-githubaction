import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";
import "./chatMessage.css";

// socketUrl server
const socketUrl = io.connect("http://localhost:3001");

const ChatMessage = ({ name, setName }) => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  // const [typing, setTyping] = useState(false);

  const sendMessage = async () => {
    if (message !== "") {
      const messageData = {
        author: name,
        message: message,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socketUrl.emit("send_message", messageData);
      await socketUrl.emit("typing", messageData.author);

      // to see my message on the same window
      setMessageList((prevState) => [...prevState, messageData]);
      setMessage("");
    }
  };

  // listen to event,whenever there any changes to socket server;
  useEffect(() => {
    socketUrl.on("send_message", (data) => {
      // add new message to the message list
      setMessageList((prevState) => [...prevState, data]);
    });
    // console.log(data);

    // socketUrl.on("typing", (name) => {
    //   setTyping(name);
    // });
  }, [socketUrl]);

  return (
    <>
      <div className="chat-window">
        <div className="chat-header">
          <h2>Hi {name}</h2>
          <hr />
        </div>

        <div className="chat-body">
          <ScrollToBottom className="message-container">
            {messageList.map((messageContent, i) => {
              return (
                <div
                  className="message"
                  id={name === messageContent.author ? "you" : "other"}
                  key={i}
                >
                  <div>
                    <div className="message-content">
                      <p>{messageContent.message}</p>
                    </div>
                    <div className="message-meta">
                      <p id="time">{messageContent.time}</p>
                      <p id="author">{messageContent.author}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollToBottom>
        </div>

        {/* display the message of each data that we receive from socket server   */}
        <div className="chat-footer">
          <input
            type="text"
            placeholder="hey..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => {
              e.key === "Enter" && sendMessage();
            }}
          />
          <button onClick={sendMessage}>send</button>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
