import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

import { HeaderContainer, Content, Location } from './styles'

export function Header() {
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
            <span>3</span>
          </NavLink>
        </div>
      </Content>
    </HeaderContainer>
  )
}
