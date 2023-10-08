import axios from "axios";
import {MessageResponse} from "../types/Message";
import {IChatUser} from "../types/Chat";
import {API_URL, AUTH_BEARER, METHODS_URLS} from "./api";


export const get_chats = async () => {
    const {data, status} = await axios.get<IChatUser[]>(`${API_URL}${METHODS_URLS['chat_get_users']}`,
        {
            headers: {
                'Authorization': AUTH_BEARER,
                Accept: 'application/json',
            },
        }
    )
    return data
}

export const sendMessage = async (chatId: string, message: string) => {
    try {
        const {data, status} = await axios.post<MessageResponse>(`${API_URL}${METHODS_URLS['chat_send_message']}`,
            {'chat_id': chatId, 'text': message},
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': AUTH_BEARER,
                    Accept: 'application/json',
                },
            }
        )

    } catch (e) {
        console.log(e)
    }
}