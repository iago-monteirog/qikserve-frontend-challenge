import { ReactNode, createContext, useContext, useReducer } from "react";
import { ModifierItemsSchemaType } from "../@types/modifierItem.type";

interface CartItem {
    id: number;
    name: string;
    basePrice: number;
    totalPrice: number;
    quantity: number;
    modifiers?: ModifierItemsSchemaType
}

interface CartState {
    items: CartItem[]
}

interface CartAction {
    type: 'ADD_ITEM' | 'REMOVE_ITEM' | 'UPDATE_ITEM_QUANTITY';
    payload: CartItem | { id: number; quantity?: number };
}

const CartContext = createContext<{
    state: CartState;
    dispatch: React.Dispatch<CartAction>
} | undefined>(undefined)

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
      case 'ADD_ITEM':
        // Add item logic
        const newItem = action.payload as CartItem;
        return {
          ...state,
          items: [...state.items, newItem],
        };
      case 'REMOVE_ITEM':
        // Remove item logic
        return {
          ...state,
          items: state.items.filter(item => item.id !== (action.payload as { id: number }).id),
        };
      case 'UPDATE_ITEM_QUANTITY':
        // Update item quantity logic
        const { id, quantity } = action.payload as { id: number; quantity: number };
        return {
          ...state,
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity } : item
          ),
        };
      default:
        return state;
    }
  };

  export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });
  
    return (
      <CartContext.Provider value={{ state, dispatch }}>
        {children}
      </CartContext.Provider>
    );
  };
  
  export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  };