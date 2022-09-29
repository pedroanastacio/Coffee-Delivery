import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  width: 100%;

  padding-top: 2.5rem;

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

    @media only screen and (max-width: 992px) {
      display: flex;
      flex-direction: column;
      max-width: 45rem;
      gap: 2.5rem;

      margin: auto;
    }
  }
`
export const CheckoutCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
