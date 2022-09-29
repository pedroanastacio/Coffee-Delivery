import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.li`
  padding: 0.5rem 0.25rem 1.5rem 0.25rem;

  display: flex;
  justify-content: space-between;

  border-bottom: 2px solid ${(props) => props.theme['base-button']};

  > div {
    display: flex;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    p {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  span {
    font-weight: 700;

    color: ${(props) => props.theme['base-text']};
  }

  @media only screen and (max-width: 300px) {
    img {
      display: none;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  border: none;
  border-radius: 6px;
  padding: 0.5rem;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  font-size: 0.75rem;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
