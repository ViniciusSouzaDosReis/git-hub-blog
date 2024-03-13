import { api } from '@/lib/axios'

interface GetRepoIssuesParams {
  searchText: string
}

interface GetRepoIssuesResponse {
  total_count: number
  items: {
    id: number
    body: string
    title: string
    updated_at: string
    number: number
  }[]
}

export async function getRepoIssues({ searchText }: GetRepoIssuesParams) {
  const response = await api.get<GetRepoIssuesResponse>(
    `/search/issues?q=${searchText} repo:microsoft/TypeScript`,
  )

  return response.data
}
