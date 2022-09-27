import { useLocation } from 'react-router-dom'

import { SuccessContainer } from './styles'

export function Success() {
  const { state } = useLocation()

  return (
    <SuccessContainer>
      <p>{state.street}</p>
    </SuccessContainer>
  )
}
