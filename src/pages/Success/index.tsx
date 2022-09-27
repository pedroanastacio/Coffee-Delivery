import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Navigate, useLocation } from 'react-router-dom'
import { RoundedIcon } from '../../components/RoundedIcon'
import { DeliveryDataType } from '../Checkout'

import { Content, DeliveryData, SuccessContainer, Title } from './styles'

export function Success() {
  const { state } = useLocation() as { state: DeliveryDataType }

  if (!state) {
    return <Navigate to="/" replace />
  }

  return (
    <SuccessContainer>
      <Title>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Title>

      <Content>
        <DeliveryData>
          <div>
            <RoundedIcon
              variant="purple"
              icon={<MapPin size={16} weight="fill" />}
            />

            <div>
              <p>
                Entrega em{' '}
                <b>
                  {state.street}, {state.number}
                </b>
              </p>
              <p>
                {state.neighborhood} - {state.city}, {state.uf}
              </p>
            </div>
          </div>

          <div>
            <RoundedIcon
              variant="yellow"
              icon={<Timer size={16} weight="fill" />}
            />

            <div>
              <p>Previsão de entrega</p>
              <b>20 min - 30 min</b>
            </div>
          </div>

          <div>
            <RoundedIcon
              variant="yellow-dark"
              icon={<CurrencyDollar size={16} weight="fill" />}
            />

            <div>
              <p>Pagamento na entrega</p>
              <b>{state.paymentMethod}</b>
            </div>
          </div>
        </DeliveryData>

        <img src="/src/assets/delivery.png" alt="Entregador de motocicleta" />
      </Content>
    </SuccessContainer>
  )
}
