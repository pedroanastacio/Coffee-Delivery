import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 44px;

  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2.5rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme['base-text']};

      font-size: 0.875rem;
    }

    h6 {
      color: ${(props) => props.theme['base-subtitle']};

      font-size: 1.25rem;
    }
  }
`

export const ConfirmOrderButton = styled.button`
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  border: none;

  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  font-size: 0.875rem;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
