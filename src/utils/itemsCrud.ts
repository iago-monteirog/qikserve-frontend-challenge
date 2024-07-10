import { ItemSchemaType } from "../@types/item.type";
import { ModifierItemSchemaType } from "../@types/modifierItem.type";
import { useCart } from "../contexts/CartContext";

const addItemToCart = (item: ItemSchemaType, quantity: number, modifiers?: ModifierItemSchemaType[]) => {
    const { dispatch } = useCart();
    const totalPrice = item.price + (modifiers?.reduce((acc, mod) => acc + mod.price, 0) || 0);

    dispatch({
        type: 'ADD_ITEM',
        payload: {
            id: item.id,
            name: item.name,
            basePrice: item.price,
            totalPrice,
            quantity,
            modifiers,
        },
    });
};

const removeItemFromCart = (id: number) => {
    const { dispatch } = useCart();

    dispatch({
        type: 'REMOVE_ITEM',
        payload: { id },
    });
};

const updateItemQuantity = (id: number, quantity: number) => {
    const { dispatch } = useCart();

    dispatch({
        type: 'UPDATE_ITEM_QUANTITY',
        payload: { id, quantity },
    });
};

export { addItemToCart, removeItemFromCart, updateItemQuantity }