import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AvatarImage from '@/assets/avatar.png'

import {
  ImageProfile,
  InfoItem,
  ProfileCardContainer,
  ProfileInfoContainer,
  UserInformation,
  UserNameAndGitHubLink,
} from './styles'

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <ImageProfile>
        <img src={AvatarImage} alt="Imagem de perfil do github." />
      </ImageProfile>
      <ProfileInfoContainer>
        <UserNameAndGitHubLink>
          <h2>Vinicius Reis</h2>
          <a href="">
            <strong>GITHUB</strong>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </UserNameAndGitHubLink>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <UserInformation>
          <InfoItem>
            <FontAwesomeIcon icon={faGithub} color="#3A536B" />
            ViniciusSouzaDosReis
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faBuilding} color="#3A536B" />
            ViniciusSouzaDosReis
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faUserGroup} color="#3A536B" />
            {3} seguidores
          </InfoItem>
        </UserInformation>
      </ProfileInfoContainer>
    </ProfileCardContainer>
  )
}
