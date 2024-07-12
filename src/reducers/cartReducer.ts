import { CartState, CartAction, CartItem } from '../interfaces/cart.interface'

export const cartReducer = (
  state: CartState,
  action: CartAction,
): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItem = action.payload as CartItem
      return {
        ...state,
        items: [...state.items, newItem],
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (item) => item.id !== (action.payload as { id: number }).id,
        ),
      }
    case 'UPDATE_ITEM_QUANTITY':
      const { id, quantity, totalPrice } = action.payload as {
        id: number
        quantity: number
        totalPrice: number
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity, totalPrice } : item,
        ),
      }
    default:
      return state
  }
}
