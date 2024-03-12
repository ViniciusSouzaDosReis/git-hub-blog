import Markdown from 'react-markdown'

import { PostInfoCard } from './PostInfoCard'

export function Post() {
  const teste = '# Hi, *Pluto*!'

  return (
    <>
      <PostInfoCard />
      <Markdown>{teste}</Markdown>
    </>
  )
}
