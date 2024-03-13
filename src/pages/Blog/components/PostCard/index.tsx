import { PostCardContainer } from './styles'

interface PostCardProps {
  title: string
  updateDate: string
  bio: string
  number: number
}

export function PostCard({ bio, title, updateDate, number }: PostCardProps) {
  return (
    <PostCardContainer to={`post/${number}`}>
      <div>
        <h2>{title}</h2>
        <span>{updateDate}</span>
      </div>
      <p>{bio}</p>
    </PostCardContainer>
  )
}
