import { useState } from "react";

function MessageInput() {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() !== "") {
      console.log("Sending message:", message);
      setMessage(""); // Clear input after sending
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#1F2225",
        padding: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "border 1px solid #FFFFFF",
        opacity: "90%",
      }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{
          width: "70%",
          marginRight: "10px",
          padding: "10px",
          borderRadius: "5px",
        }}
      />
      <button
        className="btn btn-dark"
        style={{ border: "1px solid  #FFFFFF", opacity: "90%" }}
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;
