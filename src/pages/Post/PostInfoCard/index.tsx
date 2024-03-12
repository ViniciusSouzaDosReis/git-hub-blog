import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import { InfoItem } from '@/components/InfoItem'

import {
  LinksContainer,
  PostInformation,
  ProstInfoCardContainer,
} from './styles'

export function PostInfoCard() {
  return (
    <ProstInfoCardContainer>
      <LinksContainer>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>VOLTAR</span>
        </Link>
        <Link to="/">
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </LinksContainer>
      <h2>JavaScript data types and data structures</h2>
      <PostInformation>
        <InfoItem>
          <FontAwesomeIcon icon={faGithub} color="#3A536B" />
          ViniciusSouzaDosReis
        </InfoItem>
        <InfoItem>
          <FontAwesomeIcon icon={faCalendarDay} color="#3A536B" />
          Há 1 dia
        </InfoItem>
        <InfoItem>
          <FontAwesomeIcon icon={faComment} color="#3A536B" /> 5 comentarios
        </InfoItem>
      </PostInformation>
    </ProstInfoCardContainer>
  )
}
