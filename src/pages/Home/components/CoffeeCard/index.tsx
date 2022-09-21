import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { CoffeeTag } from '../../../../interfaces/Coffee'
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

const COFFEES_AMOUNT_MIN = 1
const COFFEES_AMOUNT_MAX = 10

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

  function handleCoffeesAmountChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setCoffeesAmount(event.target.valueAsNumber)
  }

  function handleDecrementCoffeesAmount() {
    if (coffeesAmount > 1) {
      setCoffeesAmount((state) => state - 1)
    }
  }

  function handleIncrementCoffeesAmount() {
    if (coffeesAmount < 10) {
      setCoffeesAmount((state) => state + 1)
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    addNewItem({ id, amount: coffeesAmount })
  }

  return (
    <CoffeeCardContainer>
      <img src={image} alt="" />

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
          <div>
            <button type="button" onClick={handleDecrementCoffeesAmount}>
              <Minus size={14} />
            </button>
            <input
              id="coffeesAmount"
              placeholder="1"
              type="number"
              min={COFFEES_AMOUNT_MIN}
              max={COFFEES_AMOUNT_MAX}
              value={coffeesAmount}
              onChange={handleCoffeesAmountChange}
            />
            <button type="button" onClick={handleIncrementCoffeesAmount}>
              <Plus size={14} />
            </button>
          </div>

          <AddToCartButton>
            <ShoppingCart size={22} weight="fill" />
          </AddToCartButton>
        </BuyForm>
      </Buy>
    </CoffeeCardContainer>
  )
}
