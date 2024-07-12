import { SearchBarComponent } from '../../components/SearchBar'
import {
  CloseButton,
  Content,
  DialogContent,
  DialogOverlay,
  MenuBox,
  MenuContainer,
  MobileCartButton,
  ShopCartContainer,
} from './styles'
import { Carrousel } from './components/Carrousel'
import { MenuSection } from './components/MenuSection'
import { useRef, useState } from 'react'
import { ShopCart } from '../../components/ShopCart'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from '@phosphor-icons/react'
import { useCart } from '../../contexts/CartContext'

export const Menu = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const sectionRefs = useRef<Record<number, HTMLDivElement | null>>({})
  const { state } = useCart()

  const items = state.items

  const scrollToSection = (sectionId: number) => {
    const sectionElement = sectionRefs.current[sectionId]
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const mobileCartButtonText =
    items.length > 1
      ? `Your basket • ${items.length} items`
      : `Your basket • ${items.length} item`

  return (
    <MenuContainer>
      <SearchBarComponent />

      <Content>
        <MenuBox>
          <Carrousel scrollToSection={scrollToSection} />
          <MenuSection
            setSectionRefs={(refs) => (sectionRefs.current = refs.current)}
          />
        </MenuBox>
        <ShopCartContainer>
          <ShopCart />
        </ShopCartContainer>
        {items.length ? (
          <MobileCartButton onClick={toggleCart}>
            {mobileCartButtonText}
          </MobileCartButton>
        ) : (
          <></>
        )}
      </Content>

      <Dialog.Root open={isCartOpen} onOpenChange={setIsCartOpen}>
        <DialogOverlay />
        <DialogContent>
          <ShopCart />
          <Dialog.Close asChild>
            <CloseButton type="button">
              <X size={20} color="#121212" />
            </CloseButton>
          </Dialog.Close>
        </DialogContent>
      </Dialog.Root>
    </MenuContainer>
  )
}
