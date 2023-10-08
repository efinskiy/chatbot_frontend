export let API_URL = "http://localhost:8000"
export let AUTH_BEARER = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijp7ImlkIjoxfSwidHlwZSI6ImFjY2VzcyIsImV4cCI6MTY5NjcwMzI3MywiaWF0IjoxNjk2NjE2ODczLCJqdGkiOiJkMzcyMDM4YS01MWQyLTQyY2YtYTNlOC1lOWQ0NWFiNzc3NWMifQ.7ORlWyis2eexxeY8BdDGivU_Iu8DEerMNMOlRybymrc"

export let METHODS_URLS = {
    chat_send_message: "/api/messages/",
    chat_get_users: "/api/chats",
    chat_get_unseen: "/api/messages/unseen"
}