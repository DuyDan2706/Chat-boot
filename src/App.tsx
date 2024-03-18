import { useState } from "react"
import "./App.css"
import "@chatscope/chat-ui-kit-react/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  MessageInput,
  Message,
} from "@chatscope/chat-ui-kit-react";

interface MessageModel {
  message: string;
  sender: string;
  direction?: string; // Make direction optional

}
function App() {
  const [messages, setMessages] = useState<MessageModel[]>([
    {
      message: "Xin chào, Mình chat bot bạn biết mình chứ!",
      sender: "chat bot" // Corrected sender's spelling
    }
  ]);
 const handleSend =  (message:string) => {
   const newMessage = 
   
  {message: message,
    sender : "user",
    direction:"outgoing",
  } 
  
  
  const newMessages = [...messages, newMessage]
  setMessages(newMessages);
 }

  return (
    <div className="App">
      <div style={{ height: "800px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList>
            {messages.map((message, i) => (
                <Message key={i} model={message} />
              ))}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;
