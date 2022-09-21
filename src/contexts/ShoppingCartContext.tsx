import { createContext, PropsWithChildren, useEffect, useReducer } from 'react'
import {
  addNewItemAction,
  removeItemAction,
} from '../reducers/shoppingCart/actions'

import { Item, shoppingCartReducer } from '../reducers/shoppingCart/reducer'

interface ShoppingCartContextType {
  items: Item[]
  totalItems: number
  addNewItem: (item: Item) => void
  removeItem: (itemId: string) => void
}

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

  function addNewItem(item: Item) {
    dispatch(addNewItemAction(item))
  }

  function removeItem(itemId: string) {
    dispatch(removeItemAction(itemId))
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
        addNewItem,
        removeItem,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
