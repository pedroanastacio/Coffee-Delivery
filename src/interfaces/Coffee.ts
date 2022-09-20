/* eslint-disable no-unused-vars */
export enum CoffeeTag {
  TRADICIONAL = 'TRADICIONAL',
  COM_LEITE = 'COM LEITE',
  GELADO = 'GELADO',
  ALCOÓLICO = 'ALCOÓLICO',
  ESPECIAL = 'ESPECIAL',
}

export interface ICoffee {
  id: string
  image: string
  tags: CoffeeTag[]
  name: string
  description: string
  price: number
}
