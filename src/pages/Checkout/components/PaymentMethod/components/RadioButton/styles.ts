import styled from 'styled-components'

export const RadioButtonContainer = styled.label`
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
