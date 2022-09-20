import styled from 'styled-components'

export const CoffeeCardContainer = styled.li`
  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.25rem;

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -2.5rem;
    margin-bottom: 0.75rem;
  }

  h4 {
    color: ${(props) => props.theme['base-subtitle']};

    text-align: center;
    font-weight: 700;
    font-size: 1.25rem;

    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme['base-label']};

    text-align: center;
    font-size: 0.875rem;
    line-height: 1.3;

    margin-bottom: 2.0625rem;

    flex: 1;
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 0.75rem;

  margin-bottom: 1rem;

  span {
    border-radius: 100px;
    padding: 0.25rem 0.5rem;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    font-weight: 700;
    font-size: 0.625rem;
  }
`

export const Buy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`

export const Price = styled.span`
  font-size: 0.875rem;

  span {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 800;
  }
`

export const BuyForm = styled.form`
  display: flex;
  gap: 0.5rem;

  div {
    background-color: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-title']};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    padding: 0.5rem;
    border-radius: 6px;

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
    }

    input {
      border: none;
      max-width: 1.25rem;

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
  }
`

export const AddToCartButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 6px;

  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};

  width: 2.375rem;
  height: 2.375rem;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
