import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`

export const Header = styled.header`
  display: flex;
  gap: 0.75rem;

  svg {
    color: ${(props) => props.theme.purple};
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

export const PaymentMethods = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const PaymentMethodRadioButton = styled.label`
  flex: 1;
  display: flex;

  input[type='radio'] {
    opacity: 0;
    position: absolute;

    cursor: pointer;

    &:checked + div {
      border: 1px solid ${(props) => props.theme.purple};
      background: ${(props) => props.theme['purple-light']};
    }
  }

  div {
    width: 100%;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-button']};

    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-button']};

    font-size: 0.75rem;

    cursor: pointer;

    svg {
      color: ${(props) => props.theme.purple};
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }
`
