import { ModifierItemsSchemaType } from "../@types/modifierItem.type";

export interface CartItem {
    id: number;
    name: string;
    basePrice: number;
    totalPrice: number;
    quantity: number;
    modifiers?: ModifierItemsSchemaType
  }
  
  export interface CartState {
    items: CartItem[]
  }
  
  export interface CartAction {
    type: 'ADD_ITEM' | 'REMOVE_ITEM' | 'UPDATE_ITEM_QUANTITY';
    payload: CartItem | { id: number; quantity?: number };
  }