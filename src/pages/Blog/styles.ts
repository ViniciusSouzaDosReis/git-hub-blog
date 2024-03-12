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

export const PostCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 26rem;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  div {
    display: flex;
    gap: 1rem;

    h2 {
      max-width: 17.5rem;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-size: 0.875;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const ListPostCard = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 3rem;
`
