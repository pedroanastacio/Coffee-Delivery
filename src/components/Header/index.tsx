import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

import { HeaderContainer, Content, Location } from './styles'

export function Header() {
  const { totalItems } = useContext(ShoppingCartContext)

  return (
    <HeaderContainer>
      <Content>
        <img src={coffeeDeliveryLogo} alt="" />

        <div>
          <Location>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </Location>

          <NavLink to="/checkout" title="Carrinho">
            <ShoppingCart size={22} weight="fill" />
            <span>{totalItems}</span>
          </NavLink>
        </div>
      </Content>
    </HeaderContainer>
  )
}
