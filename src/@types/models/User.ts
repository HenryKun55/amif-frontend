export type User = {
  id: string
  username: string
  creator?: {
    id: string
    username: string
  }
}
