import {IChatUser} from "../../types/Chat";

interface ChatUserProp {
	user: IChatUser
}
export const ChatUser = ({user}: ChatUserProp) => {
	return (
		<div>
			<h3>{user.user_source.title} | {user.name}</h3>
			<p>System id: {user.id}</p>
			<p>{user.user_source.title} login: {user.platform_login}</p>
			<p>{user.user_source.title} id: {user.platform_id}</p>
		</div>
	)
}