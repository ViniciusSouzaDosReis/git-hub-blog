import { api } from '@/lib/axios'

interface GetUserInfoParams {
  name: string
}

interface GetUserInfoResponse {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string | null
  followers: number
}

export async function getUserInfo({ name }: GetUserInfoParams) {
  const response = await api.get<GetUserInfoResponse>(`/users/${name}`)

  return response.data
}
