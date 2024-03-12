import styled from 'styled-components'

export const MainContainer = styled.main`
  position: relative;
  bottom: 88px;
  max-width: 54rem;
  margin-inline: auto;
`

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 4.5rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 1.125rem;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    padding: 0.75rem 1rem;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    color: white;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const ListPostCard = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 3rem;
`
