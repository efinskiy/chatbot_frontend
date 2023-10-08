enum Attachment {
    image,
    voice,
    geo,
    file,
    no_attachment,
}

export interface MessageResponse{
    status: string
}
export interface Message {
    user_id : number
    is_reply: boolean
    text: string
    attachment : string
    attachment_type: Attachment
    chat_id : number
}



// 'user_id': None,
//     'reply_user_id': None,
//     'is_reply': False,
//     'text': message.text,
//     'attachment': None,
//     'attachment_type': None,
//     'chat_id': message.chat.id