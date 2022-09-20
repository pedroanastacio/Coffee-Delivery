import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;

  padding: 2rem 0;

  position: sticky;
  z-index: 1;
  top: 0;

  background-color: ${(props) => props.theme.background};
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 72rem;
  padding: 0 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.875rem;

    a {
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};

      position: relative;

      display: flex;
      align-items: center;

      padding: 0.5rem;
      border-radius: 6px;

      span {
        display: flex;
        align-items: center;
        justify-content: center;

        background: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme.white};

        font-size: 0.75rem;
        font-weight: 700;

        border-radius: 9999px;
        padding: 0.2rem;

        height: 1.25rem;
        min-width: 1.25rem;

        position: absolute;
        top: -0.625rem;
        right: -0.625rem;
      }
    }
  }
`

export const Location = styled.span`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  font-size: 0.875rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.purple};
  }
`
