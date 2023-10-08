import {Message} from "../../../types/Message";

interface IChatMessageProps {
	message: Message
}
export const ChatMessage = ({message}: IChatMessageProps) => {
	return (
		<div className='message'>
			<div className='sender'>
				From: {message.chat_id}
			</div>
			<div className='text'>
				Writes: {message.text}
			</div>
			<div className='is_reply'>
				Is reply?: {message.is_reply.toString()}
			</div>
		</div>
	)
}