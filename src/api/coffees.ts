import { v4 as uuidv4 } from 'uuid'

import { CoffeeTag, Coffee } from '../interfaces/Coffee'

export const COFFEES = [
  {
    id: uuidv4(),
    image: '/src/assets/expresso.png',
    tags: [CoffeeTag.TRADICIONAL],
    name: 'Expresso',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: '/src/assets/americano.png',
    tags: [CoffeeTag.TRADICIONAL],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: '/src/assets/expresso-cremoso.png',
    tags: [CoffeeTag.TRADICIONAL],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: '/src/assets/cafe-gelado.png',
    tags: [CoffeeTag.TRADICIONAL, CoffeeTag.GELADO],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: '/src/assets/cafe-com-leite.png',
    tags: [CoffeeTag.TRADICIONAL, CoffeeTag.COM_LEITE],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: '/src/assets/latte.png',
    tags: [CoffeeTag.TRADICIONAL, CoffeeTag.COM_LEITE],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: '/src/assets/capuccino.png',
    tags: [CoffeeTag.TRADICIONAL, CoffeeTag.COM_LEITE],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: '/src/assets/macchiato.png',
    tags: [CoffeeTag.TRADICIONAL, CoffeeTag.COM_LEITE],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: '/src/assets/mocaccino.png',
    tags: [CoffeeTag.TRADICIONAL, CoffeeTag.COM_LEITE],
    name: 'Moccacino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: '/src/assets/chocolate-quente.png',
    tags: [CoffeeTag.ESPECIAL, CoffeeTag.COM_LEITE],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: '/src/assets/cubano.png',
    tags: [CoffeeTag.ESPECIAL, CoffeeTag.ALCOÓLICO, CoffeeTag.GELADO],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: '/src/assets/havaiano.png',
    tags: [CoffeeTag.ESPECIAL],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: '/src/assets/arabe.png',
    tags: [CoffeeTag.ESPECIAL],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: '/src/assets/irlandes.png',
    tags: [CoffeeTag.ESPECIAL, CoffeeTag.ALCOÓLICO],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
] as Coffee[]
