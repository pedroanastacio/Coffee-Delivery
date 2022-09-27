import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { COFFEES } from '../../api/coffees'
import { RoundedIcon } from '../../components/RoundedIcon'
import { CoffeeCard } from './components/CoffeeCard'

import {
  CoffeeList,
  HomeContainer,
  IntroContainer,
  IntroItem,
  IntroList,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <div>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <IntroList>
            <IntroItem>
              <RoundedIcon
                variant="yellow-dark"
                icon={<ShoppingCart size={16} weight="fill" />}
              />
              Compra simples e segura
            </IntroItem>

            <IntroItem>
              <RoundedIcon
                variant="base-text"
                icon={<Package size={16} weight="fill" />}
              />
              Embalagem mantém o café intacto
            </IntroItem>

            <IntroItem>
              <RoundedIcon
                variant="yellow"
                icon={<Timer size={16} weight="fill" />}
              />
              Entrega rápida e rastreada
            </IntroItem>

            <IntroItem>
              <RoundedIcon
                variant="purple"
                icon={<Coffee size={16} weight="fill" />}
              />
              O café chega fresquinho até você
            </IntroItem>
          </IntroList>
        </div>

        <img src="/src/assets/coffee-cup.png" alt="Copo de café" />
      </IntroContainer>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <ul>
          {COFFEES.map((coffee) => (
            <CoffeeCard
              key={`coffee-${coffee.id}`}
              id={coffee.id}
              image={coffee.image}
              tags={coffee.tags}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price}
            />
          ))}
        </ul>
      </CoffeeList>
    </HomeContainer>
  )
}
