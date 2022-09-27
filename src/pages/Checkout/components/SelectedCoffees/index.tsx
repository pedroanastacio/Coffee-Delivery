import { useContext } from 'react'

import { ShoppingCartContext } from '../../../../contexts/ShoppingCartContext'
import { currency } from '../../../../utils/currency'
import { SelectedCoffee } from './components/SelectedCoffee'

import { ConfirmOrderButton, SelectedCoffeesContainer, Total } from './styles'

export function SelectedCoffees() {
  const { items, DELIVERY_CHARGE, orderValue, orderValueWithCharges } =
    useContext(ShoppingCartContext)

  return (
    <SelectedCoffeesContainer>
      <ul>
        {items.map((item) => (
          <SelectedCoffee key={item.id} coffee={item} />
        ))}
      </ul>

      <Total>
        <div>
          <span>Total de itens</span>
          <span>R$ {currency(orderValue)}</span>
        </div>

        <div>
          <span>Entrega</span>
          <span>R$ {currency(DELIVERY_CHARGE)}</span>
        </div>

        <div>
          <h6>Total</h6>
          <h6>R$ {currency(orderValueWithCharges)}</h6>
        </div>
      </Total>

      <ConfirmOrderButton>CONFIRMAR PEDIDO</ConfirmOrderButton>
    </SelectedCoffeesContainer>
  )
}
