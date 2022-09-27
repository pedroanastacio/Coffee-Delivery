import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;

  > header + * {
    max-width: 72rem;
    padding: 0 1rem 2rem 1rem;
    align-self: center;
  }
`
