import {Message} from "../../types/Message";
import {ChatMessage} from "./chatmessage/ChatMessage";
import {Input} from "./Input/Input";
import {useEffect, useState} from "react";
import {IChatUser} from "../../types/Chat";
import {get_chats} from "../../api/chats";
import {ChatUser} from "../ChatUser/ChatUser";

export interface ChatProps {
	messages: Message[]
}

export const Chat = ({messages}: ChatProps, setMessages: React.Dispatch<Message[]>) => {
	const [users, setUsers] = useState<IChatUser[]>([])

	useEffect(()=>{
		get_chats().then(d => setUsers(d))
	}, [])

	return (
		<>
			<h2>ChatBot Interface</h2>
			<h3>Users:</h3>
			{users.map((u: IChatUser) => <ChatUser user={u}/>)}
			<h3>Messages feed:</h3>
			{messages.map((m: Message) => <ChatMessage message={m}/>)}
			{<Input messages={messages}/>}
		</>
	)
}