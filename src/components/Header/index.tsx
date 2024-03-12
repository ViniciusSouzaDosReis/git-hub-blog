import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { HeaderContainer, Title } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <FontAwesomeIcon
        icon={faTerminal}
        size="2x"
        color="#3294F8"
        style={{ marginTop: '4rem' }}
      />
      <Title>GITHUB BLOG</Title>
    </HeaderContainer>
  )
}
