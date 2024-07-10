import * as Dialog from '@radix-ui/react-dialog'
import { AddButton, AddToOrderContainer, CloseButton, Content, ModalItemHeader, ModifierHeader, Overlay } from './styles'
import { X } from '@phosphor-icons/react'
import { Modifiers } from '../../../../components/Modifiers'
import { ItemSchemaType } from '../../../../@types/item.type'
import { ModifierSchemaType } from '../../../../@types/modifier.type'
import { useCart } from '../../../../contexts/CartContext'
import { ModifierItemSchemaType } from '../../../../@types/modifierItem.type'
import { useEffect, useState } from 'react'
import useFetch from '../../../../hooks/useFetch'
import { priceFormatter } from '../../../../utils/formatter'
import { ItemCounter } from '../../../../components/ItemCounter'

interface ModalItemProps {
    item: ItemSchemaType
}

export const ModalItem = ({ item }: ModalItemProps) => {
    const { dispatch } = useCart();
    const [quantity, setQuantity] = useState(1)
    const [selectedModifier, setSelectedModifier] = useState<ModifierItemSchemaType | null>(null);
    const [totalPrice, setTotalPrice] = useState(item.price);
    const { data } = useFetch()
    const currentCurrency = data?.ccy || 'USD'

    useEffect(() => {
        const modifierPrice = selectedModifier ? selectedModifier.price : 0;
        setTotalPrice((item.price + modifierPrice) * quantity);
    }, [quantity, selectedModifier]);

    const handleAddToCart = () => {
        const selectedModifiers = selectedModifier ? [selectedModifier] : [];

        dispatch({
            type: 'ADD_ITEM',
            payload: {
                id: item.id,
                name: item.name,
                basePrice: item.price,
                totalPrice,
                quantity,
                modifiers: selectedModifiers,
            },
        });
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const imageSrc = item.images && item.images.length > 0 ? item.images[0]?.image ?? "" : "";
    const defaultModifier: ModifierSchemaType = {
        id: 0,
        name: "",
        minChoices: 0,
        maxChoices: 0,
        items: []
    };
    const modifiers = item.modifiers && item.modifiers.length > 0 ? item.modifiers[0] : defaultModifier;

    const formattedPrice = priceFormatter(currentCurrency).format(totalPrice);
    const minChoices = item.modifiers && item.modifiers.length > 0 ? item.modifiers[0].minChoices : ''

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Close asChild>
                    <CloseButton type='button'>
                        <X size={20} color='#121212' />
                    </CloseButton>
                </Dialog.Close>

                <ModalItemHeader>
                    {
                        imageSrc ? (
                            <img src={imageSrc} alt="" />
                        ) : (
                            <></>
                        )
                    }
                </ModalItemHeader>

                <ModifierHeader>
                    <Dialog.Title>{item.name}</Dialog.Title>
                    <Dialog.Description>{item.description}</Dialog.Description>
                </ModifierHeader>

                <Modifiers
                    modifiers={modifiers}
                    onModifierChange={(modifier) => setSelectedModifier(modifier)}
                />

                <AddToOrderContainer>
                    <ItemCounter
                        decrementQuantity={decrementQuantity}
                        incrementQuantity={incrementQuantity}
                        minChoices={minChoices}
                        quantity={quantity}
                        size={18}
                    />

                    <AddButton onClick={handleAddToCart}>
                        <p>Add to Order • {formattedPrice}</p>
                    </AddButton>
                </AddToOrderContainer>

            </Content>
        </Dialog.Portal>
    )
}