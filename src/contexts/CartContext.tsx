import { ReactNode, createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { CartAction, CartState } from "../interfaces/cart.interface";

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>
} | undefined>(undefined)

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