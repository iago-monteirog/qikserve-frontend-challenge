import { ItemCounterContainer, QuantityButton, Counter } from "./styles"
import { Minus, Plus } from "@phosphor-icons/react"

interface ItemCounterProps {
    quantity: number;
    minChoices?: number | string;
    incrementQuantity: (id?: number) => void;
    decrementQuantity: (id?: number) => void;
    size: number;
}

export const ItemCounter = ({decrementQuantity, incrementQuantity, quantity, minChoices, size}: ItemCounterProps) => {
    const isMinChoince = quantity === minChoices || quantity === 1;

    const handleIncrement = () => {
        if (typeof incrementQuantity === 'function') {
            incrementQuantity();
        }
    };

    const handleDecrement = () => {
        if (typeof decrementQuantity === 'function') {
            decrementQuantity();
        }
    };

    return (
        <ItemCounterContainer>
            <QuantityButton onClick={handleDecrement} disabled={isMinChoince}>
                <Minus size={size} color="#fff" weight="bold" />
            </QuantityButton>
            <Counter>{minChoices ? minChoices : quantity}</Counter>
            <QuantityButton onClick={handleIncrement}>
                <Plus size={size} color="#fff" weight="bold" />
            </QuantityButton>
        </ItemCounterContainer>
    )
}