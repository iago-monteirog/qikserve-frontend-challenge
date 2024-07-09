import * as Dialog from '@radix-ui/react-dialog'
import { AddButton, AddToOrderContainer, CloseButton, Content, ItemCounter, ModalItemHeader, ModifierHeader, Overlay, QuantityButton, ShopCartQuantity } from './styles'
import { Minus, Plus, X } from '@phosphor-icons/react'
import { Modifiers } from '../../../../components/Modifiers'

export const ModalItem = () => {
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
                    <img src="https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbe01b3373.png" alt="" />
                </ModalItemHeader>

                <ModifierHeader>
                    <Dialog.Title>Smash Brooks</Dialog.Title>
                    <Dialog.Description>100g pressed hamburger, mozzarella cheese, pickles, red onion, grilled bacon and traditional Heinz mayonnaise.</Dialog.Description>
                </ModifierHeader>

                <Modifiers />

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