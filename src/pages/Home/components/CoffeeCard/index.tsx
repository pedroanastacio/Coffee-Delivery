import { FormEvent, useContext, useState } from 'react'
import { ShoppingCart } from 'phosphor-react'

import { CoffeeTag } from '../../../../interfaces/Coffee'
import { AmountInput } from '../../../../components/AmountInput'
import { ShoppingCartContext } from '../../../../contexts/ShoppingCartContext'
import { currency } from '../../../../utils/currency'

import {
  CoffeeCardContainer,
  Tags,
  Buy,
  Price,
  BuyForm,
  AddToCartButton,
} from './styles'

interface CoffeeCardProps {
  id: string
  image: string
  tags: CoffeeTag[]
  name: string
  description: string
  price: number
}

export const COFFEES_AMOUNT_MIN = 1
export const COFFEES_AMOUNT_MAX = 10

export function CoffeeCard({
  id,
  image,
  tags,
  name,
  description,
  price,
}: CoffeeCardProps) {
  const { addNewItem } = useContext(ShoppingCartContext)
  const [coffeesAmount, setCoffeesAmount] = useState<number>(1)

  function onCoffeesAmountChange(amount: number) {
    setCoffeesAmount(amount)
  }

  function onCoffeesAmountChangeByStep(value: number) {
    setCoffeesAmount((state) => state + value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    addNewItem({ id, name, image, price, amount: coffeesAmount })
  }

  return (
    <CoffeeCardContainer>
      <img src={image} alt={`Xícara de ${name}`} />

      <Tags>
        {tags.map((tag) => (
          <span key={`${id}-${tag}`}>{tag}</span>
        ))}
      </Tags>

      <h4>{name}</h4>

      <p>{description}</p>

      <Buy>
        <Price>
          R$ <span>{currency(price)}</span>
        </Price>

        <BuyForm onSubmit={handleSubmit} action="">
          <AmountInput
            id="coffesAmount"
            amount={coffeesAmount}
            min={COFFEES_AMOUNT_MIN}
            max={COFFEES_AMOUNT_MAX}
            step={1}
            setAmount={onCoffeesAmountChange}
            setAmountByStep={onCoffeesAmountChangeByStep}
          />

          <AddToCartButton>
            <ShoppingCart size={22} weight="fill" />
          </AddToCartButton>
        </BuyForm>
      </Buy>
    </CoffeeCardContainer>
  )
}
