import styled from 'styled-components'

export const AmountInputContainer = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-title']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;

  width: 4.5rem;

  button {
    border: none;

    width: 0.875rem;
    height: 0.875rem;

    color: ${(props) => props.theme.purple};
    background: transparent;

    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  input {
    border: none;
    width: 1.25rem;

    background: transparent;
    color: ${(props) => props.theme['base-title']};

    text-align: center;

    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
