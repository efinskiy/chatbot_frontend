
interface UserSource {
    title: string
    icon_url: string
    enabled: boolean
}
export interface IChatUser {
    id: number
    name: string
    user_source: UserSource
    platform_id: number
    platform_login: string
    banned: boolean

}