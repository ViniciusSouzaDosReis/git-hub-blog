import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
`

export const ImageProfile = styled.div`
  flex: 1;
  max-height: 148px;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`

export const ProfileInfoContainer = styled.div`
  flex: 4;

  p {
    margin-bottom: 1.5rem;
  }
`

export const UserNameAndGitHubLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  a {
    strong {
      margin-right: 0.5rem;
    }
  }
`

export const UserInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: auto;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['base-subtitle']};
`
