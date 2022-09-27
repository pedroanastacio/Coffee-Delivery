import styled from 'styled-components'

export type variant = 'yellow' | 'yellow-dark' | 'base-text' | 'purple'

interface RoundedIconContainerProps {
  variant: variant
}

export const RoundedIconContainer = styled.span<RoundedIconContainerProps>`
  svg {
    padding: 0.5rem;
    border-radius: 9999px;

    width: 2rem;
    height: 2rem;

    color: ${(props) => props.theme.background};
    background-color: ${(props) => props.theme[`${props.variant}`]};
  }
`
