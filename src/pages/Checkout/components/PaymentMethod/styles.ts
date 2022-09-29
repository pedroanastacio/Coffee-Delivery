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

  @media only screen and (max-width: 576px) {
    flex-direction: column;
  }
`
