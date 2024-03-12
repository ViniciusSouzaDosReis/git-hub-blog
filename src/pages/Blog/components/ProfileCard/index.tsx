import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useQuery } from '@tanstack/react-query'

import { getUserInfo } from '@/api/get-user-info'
import { InfoItem } from '@/components/InfoItem'

import {
  ImageProfile,
  ProfileCardContainer,
  ProfileInfoContainer,
  UserInformation,
  UserNameAndGitHubLink,
} from './styles'

export function ProfileCard() {
  const { data: userInfo } = useQuery({
    queryKey: ['user-info'],
    queryFn: () => getUserInfo({ name: 'ViniciusSouzaDosReis' }),
    staleTime: Infinity,
  })

  return (
    <ProfileCardContainer>
      {userInfo ? (
        <>
          <ImageProfile>
            <img src={userInfo.avatar_url} alt="Imagem de perfil do github." />
          </ImageProfile>
          <ProfileInfoContainer>
            <UserNameAndGitHubLink>
              <h2>{userInfo.name}</h2>
              <a href="">
                <strong>GITHUB</strong>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </UserNameAndGitHubLink>
            <p>{userInfo.bio}</p>
            <UserInformation>
              <InfoItem>
                <FontAwesomeIcon icon={faGithub} color="#3A536B" />
                {userInfo.login}
              </InfoItem>
              <InfoItem>
                <FontAwesomeIcon icon={faBuilding} color="#3A536B" />
                {userInfo.company ? userInfo.company : 'Não possui empresa'}
              </InfoItem>
              <InfoItem>
                <FontAwesomeIcon icon={faUserGroup} color="#3A536B" />
                {userInfo.followers} seguidores
              </InfoItem>
            </UserInformation>
          </ProfileInfoContainer>
        </>
      ) : (
        <></>
      )}
    </ProfileCardContainer>
  )
}
