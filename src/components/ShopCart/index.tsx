import { Minus, Plus } from "@phosphor-icons/react"
import { ItemCounter, QuantityButton, ShopCartContainer, ShopCartContent, ShopCartHeader, ShopCartItem, ShopCartQuantity, ShopCartRowItem, ShopCartSubTotal, ShopCartTotal } from "./styles"

export const ShopCart = () => {
    return (
        <ShopCartContainer>
            <ShopCartHeader>
                <h1>Carrinho</h1>
            </ShopCartHeader>

            <ShopCartContent>
                <ShopCartItem>
                    <ShopCartRowItem>
                        <p>Caipirinha</p>
                        <span>R$13,00</span>
                    </ShopCartRowItem>
                    <ShopCartQuantity>
                        <QuantityButton>
                            <Minus size={12} color="#fff" weight="bold" />
                        </QuantityButton>
                        <ItemCounter>1</ItemCounter>
                        <QuantityButton>
                            <Plus size={12} color="#fff" weight="bold" />
                        </QuantityButton>
                    </ShopCartQuantity>
                </ShopCartItem>

            </ShopCartContent>

            <ShopCartSubTotal>
                <p>Sub total</p>
                <span>R$ 48,00</span>
            </ShopCartSubTotal>
            <ShopCartTotal>
                <p>Total</p>
                <span>R$ 48,00</span>
            </ShopCartTotal>
        </ShopCartContainer>
    )
}