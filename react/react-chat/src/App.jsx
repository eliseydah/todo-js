import { useState, useEffect } from "react";
import Message from "./message";
import { getChat, createMessage, deleteMessage } from "./api";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [side, setSide] = useState("");
  const [time, setTime] = useState("");
  async function fetchMessages() {
    const result = await getChat();

    setMessages(result);
  }
  async function addMessage() {
    await createMessage(text, title, side, time);
    await fetchMessages();
    setText("");
  }
  async function removeMessage(message) {
    console.log(message);
    await deleteMessage(message.id);
    await fetchMessages();
  }
  useEffect(() => {
    fetchMessages();
  }, []);
  return (
    <div className="container">
      <div className="chat">
        {messages.map((item) => (
          <Message
            message={item}
            key={item.id}
            removeMessage={() => {
              removeMessage(item);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
