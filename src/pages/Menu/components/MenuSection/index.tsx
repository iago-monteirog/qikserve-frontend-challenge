import { memo, useContext, useEffect, useRef, useState } from 'react'
import {
  BadgeQuantity,
  CaretDownIcon,
  CaretUpIcon,
  ItemDescription,
  ItemTitle,
  ItemsContainer,
  MenuItem,
  MenuSectionContainer,
  MenuSectionToggleeBox,
  MenuTitleBox,
} from './styles'
import { MenuContext } from '../../../../contexts/MenuContext'
import useFetch from '../../../../hooks/useFetch'
import { priceFormatter } from '../../../../utils/formatter'
import * as Dialog from '@radix-ui/react-dialog'
import { ModalItem } from '../ModalItem'
import { useCart } from '../../../../contexts/CartContext'

interface MenuSectionProps {
  setSectionRefs: (
    refs: React.MutableRefObject<Record<number, HTMLDivElement | null>>,
  ) => void
}

type SectionState = Record<number, boolean>

const MenuSectionComponent = ({ setSectionRefs }: MenuSectionProps) => {
  const { menuData } = useContext(MenuContext)
  const { data } = useFetch()
  const { state } = useCart()
  const [openSections, setOpenSections] = useState<SectionState>({})
  const sectionRefs = useRef<Record<number, HTMLDivElement | null>>({})

  setSectionRefs(sectionRefs)
  useEffect(() => {
    setSectionRefs(sectionRefs)
  }, [sectionRefs, setSectionRefs])

  const currentCurrency = data?.ccy || 'USD'

  const menuSections = menuData?.sections

  const itemsCart = state.items

  const toggleMenu = (sectionId: number) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [sectionId]: !prevState[sectionId],
    }))
  }

  return (
    <MenuSectionContainer>
      {menuSections?.map((section) => {
        const items = section.items
        const isOpen = openSections[section.id]

        return (
          <MenuSectionToggleeBox
            key={section.id}
            ref={(el) => (sectionRefs.current[section.id] = el)}
          >
            <MenuTitleBox>
              <h1>{section.name}</h1>
              <div onClick={() => toggleMenu(section.id)}>
                {isOpen ? (
                  <CaretDownIcon size={24} />
                ) : (
                  <CaretUpIcon size={24} />
                )}
              </div>
            </MenuTitleBox>

            <ItemsContainer className={isOpen ? 'closed' : 'open'}>
              {items.map((item) => {
                const imageSrc =
                  item.images && item.images.length > 0
                    ? item.images[0]?.image ?? ''
                    : ''
                const description =
                  item.description && item.description.length > 58
                    ? `${item.description.slice(0, 58)}...`
                    : item.description
                const formattedPrice = priceFormatter(currentCurrency).format(
                  item.price,
                )

                const itemFromCart = itemsCart.find((itemCart) => itemCart.id === item.id)

                return (
                  <Dialog.Root key={item.id}>
                    <Dialog.Trigger asChild>
                      <MenuItem>
                        <ItemDescription>
                          <ItemTitle>
                            {
                              itemFromCart ? (
                                <BadgeQuantity>{itemFromCart?.quantity}</BadgeQuantity>
                              ) :
                              (
                                <></>
                              )
                            }
                            <h3>{item.name}</h3>
                          </ItemTitle>
                          <p>{description}</p>
                          <span>{formattedPrice}</span>
                        </ItemDescription>
                        {imageSrc !== '' && (
                          <img src={imageSrc} alt={item.name} />
                        )}
                      </MenuItem>
                    </Dialog.Trigger>
                    <ModalItem item={item!} />
                  </Dialog.Root>
                )
              })}
            </ItemsContainer>
          </MenuSectionToggleeBox>
        )
      })}
    </MenuSectionContainer>
  )
}

export const MenuSection = memo(MenuSectionComponent)
