import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/ProfileCard'
import { ListPostCard, SearchFormContainer } from './styles'

export function Blog() {
  return (
    <>
      <ProfileCard />
      <SearchFormContainer>
        <div>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchFormContainer>
      <ListPostCard>
        <PostCard />
        <PostCard />
        <PostCard />
      </ListPostCard>
    </>
  )
}
