import { memo } from "react";
import { ItemCounterContainer, QuantityButton, Counter } from "./styles"
import { Minus, Plus } from "@phosphor-icons/react"

interface ItemCounterProps {
    quantity: number;
    minChoices?: number | string;
    incrementQuantity: (id?: number) => void;
    decrementQuantity: (id?: number) => void;
    size: number;
    canRemoveItem?: boolean;
}

export const ItemCounterComponent = ({
    decrementQuantity,
    incrementQuantity,
    quantity,
    minChoices,
    size,
    canRemoveItem = false
}: ItemCounterProps) => {
    const isMinChoice = quantity === minChoices || (quantity === 1 && !canRemoveItem);

    const handleIncrement = () => {
        incrementQuantity();
    };

    const handleDecrement = () => {
        decrementQuantity();
    };

    return (
        <ItemCounterContainer>
            <QuantityButton onClick={handleDecrement} disabled={isMinChoice}>
                <Minus size={size} color="#fff" weight="bold" />
            </QuantityButton>
            <Counter>{quantity}</Counter>
            <QuantityButton onClick={handleIncrement}>
                <Plus size={size} color="#fff" weight="bold" />
            </QuantityButton>
        </ItemCounterContainer>
    )
}

export const ItemCounter = memo(ItemCounterComponent)