import { createContext, PropsWithChildren, useEffect, useReducer } from 'react'
import {
  addNewItemAction,
  changeItemAmountAction,
  changeItemAmountByStepAction,
  emptyCartAction,
  removeItemAction,
} from '../reducers/shoppingCart/actions'

import { Item, shoppingCartReducer } from '../reducers/shoppingCart/reducer'

interface ShoppingCartContextType {
  items: Item[]
  totalItems: number
  DELIVERY_CHARGE: number
  orderValue: number
  orderValueWithCharges: number
  addNewItem: (item: Item) => void
  removeItem: (id: string) => void
  changeAmount: (id: string, amount: number) => void
  changeAmountByStep: (id: string, amount: number) => void
  emptyCart: () => void
}

const DELIVERY_CHARGE = 3.5

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function ShoppingCartContextProvider({ children }: PropsWithChildren) {
  const [shoppingCartState, dispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    },
    () => {
      const storedStateJSON = localStorage.getItem(
        '@coffee-delivery:shopping-cart-state-1.0.0',
      )

      if (storedStateJSON) {
        return JSON.parse(storedStateJSON)
      }

      return {
        items: [],
      }
    },
  )

  const { items } = shoppingCartState

  const totalItems = items.length

  const orderValue = items.reduce(calculateTotalPrice, 0)

  const orderValueWithCharges = orderValue + DELIVERY_CHARGE

  function calculateTotalPrice(total: number, item: Item) {
    return total + item.price * item.amount
  }

  function addNewItem(item: Item) {
    dispatch(addNewItemAction(item))
  }

  function removeItem(id: string) {
    dispatch(removeItemAction(id))
  }

  function changeAmount(id: string, amount: number) {
    dispatch(changeItemAmountAction(id, amount))
  }

  function changeAmountByStep(id: string, amount: number) {
    dispatch(changeItemAmountByStepAction(id, amount))
  }

  function emptyCart() {
    dispatch(emptyCartAction())
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(shoppingCartState)

    localStorage.setItem(
      '@coffee-delivery:shopping-cart-state-1.0.0',
      stateJSON,
    )
  }, [shoppingCartState])

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        totalItems,
        DELIVERY_CHARGE,
        orderValue,
        orderValueWithCharges,
        addNewItem,
        removeItem,
        changeAmount,
        changeAmountByStep,
        emptyCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
