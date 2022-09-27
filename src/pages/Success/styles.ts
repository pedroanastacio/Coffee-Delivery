import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  padding-top: 5rem;

  width: 100%;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h1 {
    color: ${(props) => props.theme['yellow-dark']};

    font-size: 2rem;
    font-weight: 800;
  }

  p {
    font-size: 1.25rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
`

export const DeliveryData = styled.div`
  border: 1px solid transparent;
  background: linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
      )
      border-box;
  border-radius: 6px 36px;

  padding: 2.5rem;
  margin-top: 0.75rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  max-width: 32.875rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    div {
      display: flex;
      flex-direction: column;

      line-height: 1.3;
    }
  }
`
