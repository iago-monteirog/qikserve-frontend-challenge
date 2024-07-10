import * as Dialog from '@radix-ui/react-dialog'
import { AddButton, AddToOrderContainer, CloseButton, Content, ItemCounter, ModalItemHeader, ModifierHeader, Overlay, QuantityButton, ShopCartQuantity } from './styles'
import { Minus, Plus, X } from '@phosphor-icons/react'
import { Modifiers } from '../../../../components/Modifiers'
import { ItemSchemaType } from '../../../../@types/item.type'
import { ModifierSchemaType } from '../../../../@types/modifier.type'

interface ModalItemProps {
    item: ItemSchemaType
}

export const ModalItem = ({ item }: ModalItemProps) => {
    const imageSrc = item.images && item.images.length > 0 ? item.images[0]?.image ?? "" : "";
    const defaultModifier: ModifierSchemaType = {
        id: 0,
        name: "",
        minChoices: 0,
        maxChoices: 0,
        items: []
    };
    const modifiers = item.modifiers && item.modifiers.length > 0 ? item.modifiers[0] : defaultModifier;

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
                    <img src={imageSrc} alt="" />
                </ModalItemHeader>

                <ModifierHeader>
                    <Dialog.Title>{item.name}</Dialog.Title>
                    <Dialog.Description>{item.description}</Dialog.Description>
                </ModifierHeader>

                <Modifiers modifiers={modifiers} />

                <AddToOrderContainer>
                    <ShopCartQuantity>
                        <QuantityButton>
                            <Minus size={18} color="#fff" weight="bold" />
                        </QuantityButton>
                        <ItemCounter>1</ItemCounter>
                        <QuantityButton>
                            <Plus size={18} color="#fff" weight="bold" />
                        </QuantityButton>
                    </ShopCartQuantity>

                    <AddButton>
                        <p>Add to Order • $11.75</p>
                    </AddButton>
                </AddToOrderContainer>

            </Content>
        </Dialog.Portal>
    )
}