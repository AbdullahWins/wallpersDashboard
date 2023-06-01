import React, { useState } from "react";

const ChatComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const chatButtonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const chatContainerStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "300px",
    height: "400px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    overflow: "hidden",
  };

  const chatHeaderStyle = {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    display: "flex",
    justifyContent: "flex-end",
  };

  const closeButtonStyle = {
    padding: "5px 10px",
    backgroundColor: "#fff",
    color: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const chatBodyStyle = {
    height: "100%",
    padding: "10px",
    overflowY: "auto",
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
      {!isOpen && (
        <button style={chatButtonStyle} onClick={toggleChat}>
          Chat
        </button>
      )}

      {isOpen && (
        <div style={chatContainerStyle}>
          <div style={chatHeaderStyle}>
            <button style={closeButtonStyle} onClick={toggleChat}>
              Close
            </button>
          </div>
          <div style={chatBodyStyle}>
            {/* Chat messages, input field, etc. */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
