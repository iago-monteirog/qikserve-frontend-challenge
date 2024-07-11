import { ShopCartContainer, ShopCartContent, ShopCartHeader, ShopCartItem, ShopCartRowItem, ShopCartSubTotal, ShopCartTotal, EmptyCart, ModifierText } from "./styles"
import { CartItem, useCart } from "../../contexts/CartContext"
import useFetch from "../../hooks/useFetch";
import { priceFormatter } from "../../utils/formatter";
import { ItemCounter } from "../ItemCounter";

export const ShopCart = () => {
    const { state, dispatch } = useCart();
    const { data } = useFetch()
    const currentCurrency = data?.ccy || 'USD'

    const items = state.items;

    const subTotal = items.reduce((acc, item) => acc + item.totalPrice, 0);
    const formattedSubTotal = priceFormatter(currentCurrency).format(subTotal)
    const formattedTotal = priceFormatter(currentCurrency).format(subTotal)

    const calculateTotalPrice = (item: CartItem, quantity: number) => {
        const modifiersTotalPrice = item.modifiers?.reduce((acc, mod) => acc + mod.price, 0) || 0;
        return (item.basePrice + modifiersTotalPrice) * quantity;
    };

    const incrementQuantity = (id: number) => {
        const item = items.find(item => item.id === id);
        if (item) {
            const newQuantity = item.quantity + 1;
            const newTotalPrice = calculateTotalPrice(item, newQuantity);
            dispatch({
                type: 'UPDATE_ITEM_QUANTITY',
                payload: { id, quantity: newQuantity, totalPrice: newTotalPrice }
            });
        }
    };

    const decrementQuantity = (id: number) => {
        const item = items.find(item => item.id === id);
        if (item) {
            const newQuantity = item.quantity - 1;
            if (newQuantity === 0) {
                dispatch({
                    type: 'REMOVE_ITEM',
                    payload: { id }
                });
            } else {
                const newTotalPrice = calculateTotalPrice(item, newQuantity);
                dispatch({
                    type: 'UPDATE_ITEM_QUANTITY',
                    payload: { id, quantity: newQuantity, totalPrice: newTotalPrice }
                });
            }
        }
    };

    return (
        <ShopCartContainer>
            <ShopCartHeader>
                <h1>Carrinho</h1>
            </ShopCartHeader>

            {items.length ? (
                <>
                    <ShopCartContent>
                        {items.map(item => {
                            const formattedPrice = priceFormatter(currentCurrency).format(item.totalPrice);

                            const modifiers = item.modifiers || [];
                            return (
                                <ShopCartItem key={item.id}>
                                    <ShopCartRowItem>
                                        <p>{item.name}</p>
                                        <span>{formattedPrice}</span>
                                    </ShopCartRowItem>
                                    {modifiers.length > 0 && (
                                        <ModifierText>{modifiers[0]?.name || ''}</ModifierText>
                                    )}
                                    <ItemCounter
                                        decrementQuantity={() => decrementQuantity(item.id)}
                                        incrementQuantity={() => incrementQuantity(item.id)}
                                        quantity={item.quantity}
                                        size={12}
                                        canRemoveItem
                                    />
                                </ShopCartItem>
                            )
                        })}

                    </ShopCartContent>

                    <ShopCartSubTotal>
                        <p>Sub total</p>
                        <span>{formattedSubTotal}</span>
                    </ShopCartSubTotal>
                    <ShopCartTotal>
                        <p>Total</p>
                        <span>{formattedTotal}</span>
                    </ShopCartTotal>
                </>
            ) : (
                <EmptyCart>
                    <p>Seu carrinho está vazio</p>
                </EmptyCart>
            )}


        </ShopCartContainer>
    )
}