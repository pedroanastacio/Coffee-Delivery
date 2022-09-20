import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { CoffeeTag } from '../../../../interfaces/Coffee'
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
  image: string
  tags: CoffeeTag[]
  name: string
  description: string
  price: number
}

export function CoffeeCard({
  image,
  tags,
  name,
  description,
  price,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={image} alt="" />

      <Tags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <h4>{name}</h4>

      <p>{description}</p>

      <Buy>
        <Price>
          R$ <span>{currency(price)}</span>
        </Price>

        <BuyForm action="">
          <div>
            <button type="button">
              <Minus size={14} />
            </button>
            <input type="number" />
            <button type="button">
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
