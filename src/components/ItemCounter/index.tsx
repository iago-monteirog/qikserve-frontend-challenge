import { ItemCounterContainer, QuantityButton, Counter } from "./styles"
import { Minus, Plus } from "@phosphor-icons/react"

interface ItemCounterProps {
    quantity: number;
    minChoices: number | string;
    incrementQuantity: () => void;
    decrementQuantity: () => void;
}

export const ItemCounter = ({decrementQuantity, incrementQuantity, quantity, minChoices}: ItemCounterProps) => {
    const isMinChoince = quantity === minChoices || quantity === 1;

    return (
        <ItemCounterContainer>
            <QuantityButton onClick={decrementQuantity} disabled={isMinChoince}>
                <Minus size={18} color="#fff" weight="bold" />
            </QuantityButton>
            <Counter>{minChoices ? minChoices : quantity}</Counter>
            <QuantityButton onClick={incrementQuantity}>
                <Plus size={18} color="#fff" weight="bold" />
            </QuantityButton>
        </ItemCounterContainer>
    )
}