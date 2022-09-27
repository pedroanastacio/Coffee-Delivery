import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;

  > header + * {
    max-width: 72rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    align-self: center;
  }
`
