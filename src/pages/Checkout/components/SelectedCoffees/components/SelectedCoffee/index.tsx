import { useContext } from 'react'
import { Trash } from 'phosphor-react'

import { AmountInput } from '../../../../../../components/AmountInput'
import { ShoppingCartContext } from '../../../../../../contexts/ShoppingCartContext'
import { Item } from '../../../../../../reducers/shoppingCart/reducer'
import { currency } from '../../../../../../utils/currency'
import {
  COFFEES_AMOUNT_MAX,
  COFFEES_AMOUNT_MIN,
} from '../../../../../Home/components/CoffeeCard'

import { Actions, RemoveButton, SelectedCoffeeContainer } from './styles'

interface SelectedCoffeeProps {
  coffee: Item
}

export function SelectedCoffee({ coffee }: SelectedCoffeeProps) {
  const totalPrice = coffee.price * coffee.amount

  const { changeAmount, changeAmountByStep, removeItem } =
    useContext(ShoppingCartContext)

  function onCoffeesAmountChange(amount: number) {
    changeAmount(coffee.id, amount)
  }

  function onCoffeesAmountChangeByStep(value: number) {
    changeAmountByStep(coffee.id, value)
  }

  function handleRemove() {
    removeItem(coffee.id)
  }

  return (
    <SelectedCoffeeContainer key={`item-${coffee.id}`}>
      <div>
        <img src={coffee.image} alt={`Xícara de ${coffee.name}`} />

        <div>
          <p>{coffee.name}</p>
          <Actions>
            <AmountInput
              id="itemAmount"
              amount={coffee.amount}
              min={COFFEES_AMOUNT_MIN}
              max={COFFEES_AMOUNT_MAX}
              step={1}
              setAmount={onCoffeesAmountChange}
              setAmountByStep={onCoffeesAmountChangeByStep}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} /> REMOVER
            </RemoveButton>
          </Actions>
        </div>
      </div>
      <span>R$ {currency(totalPrice)}</span>
    </SelectedCoffeeContainer>
  )
}
