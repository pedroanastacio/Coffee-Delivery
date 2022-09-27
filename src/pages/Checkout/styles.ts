import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  width: 100%;

  form {
    display: grid;
    grid-template-columns: 0.59fr 0.41fr;
    column-gap: 2rem;

    h3 {
      color: ${(props) => props.theme['base-subtitle']};

      font-weight: 700;
      font-size: 1.125rem;

      margin-bottom: 0.9375rem;
    }
  }
`
export const CheckoutCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
