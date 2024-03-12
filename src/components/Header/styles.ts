import styled from 'styled-components'

import backgruondCover from './assets/images/Cover.jpg'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;
  width: 100vw;
  height: 18.5rem;
  background-image: url(${backgruondCover});
  background-size: cover;
`

export const Title = styled.p`
  font-family: 'Coda';
  font-size: 1.5rem;
  color: ${(props) => props.theme.blue};
`
