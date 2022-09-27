import { produce } from 'immer'
import { Coffee } from '../../interfaces/Coffee'

import { ActionTypes } from './actions'

export interface Item extends Omit<Coffee, 'tags' | 'description'> {
  amount: number
}

interface ShoppingCartState {
  items: Item[]
}

export function shoppingCartReducer(state: ShoppingCartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM: {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.item.id,
      )

      if (itemIndex < 0) {
        return produce(state, (draft) => {
          draft.items.push(action.payload.item)
        })
      }

      return produce(state, (draft) => {
        draft.items[itemIndex].amount += action.payload.item.amount
      })
    }
    case ActionTypes.REMOVE_ITEM: {
      const itemToBeRemovedIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      )

      if (itemToBeRemovedIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.items.splice(itemToBeRemovedIndex, 1)
      })
    }
    case ActionTypes.CHANGE_ITEM_AMOUNT: {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      )

      return produce(state, (draft) => {
        draft.items[itemIndex].amount = action.payload.amount
      })
    }
    case ActionTypes.CHANGE_ITEM_AMOUNT_BY_STEP: {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      )

      return produce(state, (draft) => {
        draft.items[itemIndex].amount += action.payload.amount
      })
    }
    case ActionTypes.EMPTY_CART:
      return {
        items: [],
      }
    default:
      return state
  }
}
