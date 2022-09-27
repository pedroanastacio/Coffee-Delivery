import styled from 'styled-components'

export const DeliveryAdressContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  input {
    background: ${(props) => props.theme['base-input']};

    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme['base-button']};

    display: flex;
    gap: 0.25rem;

    width: 100%;

    font-size: 0.875rem;

    position: relative;

    &:focus {
      outline: 1px solid ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const Header = styled.header`
  display: flex;
  gap: 0.75rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  h6 {
    color: ${(props) => props.theme['base-subtitle']};

    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;

    margin-bottom: 0.125rem;
  }

  p {
    color: ${(props) => props.theme['base-text']};

    font-size: 0.875rem;
    line-height: 1.3;
  }
`

export const Grid = styled.div`
  display: grid;
  row-gap: 1rem;
  column-gap: 0.75rem;
`

export const Row = styled.div`
  display: flex;
  gap: 0.75rem;
`

interface ColProps {
  size: number
}

export const Col = styled.div<ColProps>`
  flex: ${(props) => props.size};

  position: relative;
`

export const OptionalInput = styled.div`
  &:has(input:placeholder-shown) {
    &::after {
      content: 'Opcional';

      font-size: 0.75rem;
      font-style: italic;

      color: ${(props) => props.theme['base-label']};

      position: absolute;
      right: 12px;
      top: 1rem;
    }
  }
`
