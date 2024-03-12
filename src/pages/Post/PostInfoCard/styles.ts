import styled from 'styled-components'

export const ProstInfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);

  h2 {
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const PostInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`
