import { useQuery } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'

import { getRepoIssues } from '@/api/get-repo-issues'

import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/ProfileCard'
import { ListPostCard, SearchFormContainer } from './styles'

export function Blog() {
  const [search, setSearch] = useState('')

  const { data: postsData } = useQuery({
    queryKey: ['posts', search],
    queryFn: () => getRepoIssues({ searchText: search }),
    staleTime: Infinity,
  })

  function handleSearchIssue(data: React.ChangeEvent<HTMLInputElement>) {
    const value = data.target.value
    setSearch(value)
  }

  return (
    <>
      <ProfileCard />
      <SearchFormContainer>
        <div>
          <strong>Publicações</strong>
          <span>{postsData?.total_count} publicações</span>
        </div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={search}
          onChange={(event) => handleSearchIssue(event)}
        />
      </SearchFormContainer>
      {postsData ? (
        <>
          <ListPostCard>
            {postsData.items.map((item) => {
              const date = formatDistanceToNow(item.updated_at, {
                locale: ptBR,
              })

              return (
                <PostCard
                  key={item.id}
                  bio={item.body}
                  title={item.title}
                  updateDate={date}
                />
              )
            })}
          </ListPostCard>
        </>
      ) : (
        <></>
      )}
    </>
  )
}
