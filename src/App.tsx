import React, {useEffect, useState} from 'react';
import './App.css';
import {socket} from "./socket";
import {Message} from "./types/Message";
import {Chat} from "./components/chat/Chat";


function App() {
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [messages, setMessages] = useState<Message[] | []>([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onMessage(value: Message) {
      // @ts-ignore
      setMessages(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('new_message', onMessage);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('new_message', onMessage);
    };
  }, []);


  // @ts-ignore
  return (
    <div className="App">
      {isConnected ? <Chat messages={messages}/> : null}
    </div>
  );
}

export default App;
