import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface Item {
  id: string
  amount: number
}

interface ShoppingCartState {
  items: Item[]
}

export function shoppingCartReducer(state: ShoppingCartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      return produce(state, (draft) => {
        draft.items.push(action.payload.newItem)
      })
    case ActionTypes.REMOVE_ITEM: {
      const itemToBeRemovedIndex = state.items.findIndex(
        (item) => item.id === action.payload.itemId,
      )

      if (itemToBeRemovedIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.items.splice(itemToBeRemovedIndex, 1)
      })
    }
    default:
      return state
  }
}
