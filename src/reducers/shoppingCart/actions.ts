import { Item } from './reducer'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CHANGE_ITEM_AMOUNT = 'CHANGE_AMOUNT',
  CHANGE_ITEM_AMOUNT_BY_STEP = 'CHANGE_AMOUNT_BY_STEP',
  EMPTY_CART = 'EMPTY_CART',
}

export function addNewItemAction(item: Item) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      item,
    },
  }
}

export function removeItemAction(id: string) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      id,
    },
  }
}

export function changeItemAmountAction(id: string, amount: number) {
  return {
    type: ActionTypes.CHANGE_ITEM_AMOUNT,
    payload: {
      id,
      amount,
    },
  }
}

export function changeItemAmountByStepAction(id: string, amount: number) {
  return {
    type: ActionTypes.CHANGE_ITEM_AMOUNT_BY_STEP,
    payload: {
      id,
      amount,
    },
  }
}

export function emptyCartAction() {
  return {
    type: ActionTypes.EMPTY_CART,
  }
}
