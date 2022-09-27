import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext, MouseEvent } from 'react'
import { NavLink } from 'react-router-dom'

import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

import { HeaderContainer, Content, Location } from './styles'

export function Header() {
  const { totalItems } = useContext(ShoppingCartContext)

  const shoppingCartIsEmpty = totalItems === 0

  function handleShoppingCartEmptyClick(
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) {
    event.preventDefault()

    alert('Seu carrinho de compras está vazio!')
  }

  return (
    <HeaderContainer>
      <Content>
        <NavLink to="/" title="Home">
          <img src={coffeeDeliveryLogo} alt="" />
        </NavLink>

        <div>
          <Location>
            <MapPin size={22} weight="fill" />
            Patos de Minas, MG
          </Location>

          {shoppingCartIsEmpty ? (
            <NavLink
              to="/checkout"
              title="Carrinho"
              onClick={(e) => handleShoppingCartEmptyClick(e)}
            >
              <ShoppingCart size={22} weight="fill" />
            </NavLink>
          ) : (
            <NavLink to="/checkout" title="Carrinho">
              <ShoppingCart size={22} weight="fill" />
              <span>{totalItems}</span>
            </NavLink>
          )}
        </div>
      </Content>
    </HeaderContainer>
  )
}
