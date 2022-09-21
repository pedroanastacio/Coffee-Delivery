import { Item } from './reducer'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export function addNewItemAction(newItem: Item) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      newItem,
    },
  }
}

export function removeItemAction(itemId: string) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      itemId,
    },
  }
}
