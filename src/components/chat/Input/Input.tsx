import React, {useState} from "react";
import axios from "axios";
import {Message, MessageResponse} from "../../../types/Message";
import {ChatProps} from "../Chat";
import {sendMessage} from "../../../api/chats";
export const Input = ({messages}: ChatProps) => {
	const [chatId, setChatId] = useState<string>('')
	const [message, setMessage] = useState<string>('')

	const handleSendMessage = () => {
		sendMessage(chatId, message).then((r => console.log(r)))
	}

	return (
		<>
			<input type="text" onChange={e => setChatId(e.target.value)} placeholder="ChatId"/>
			<input type="text" onChange={e => setMessage(e.target.value)} placeholder="Text"/>
			<button onClick={handleSendMessage}>Send</button>
		</>
	)
}