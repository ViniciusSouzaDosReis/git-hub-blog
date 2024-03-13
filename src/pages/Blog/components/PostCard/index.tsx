import { PostCardContainer } from './styles'

interface PostCardProps {
  title: string
  updateDate: string
  bio: string
}

export function PostCard({ bio, title, updateDate }: PostCardProps) {
  return (
    <PostCardContainer to="/post/123">
      <div>
        <h2>{title}</h2>
        <span>{updateDate}</span>
      </div>
      <p>{bio}</p>
    </PostCardContainer>
  )
}
