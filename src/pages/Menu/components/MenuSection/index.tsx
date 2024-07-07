import { useContext, useState } from 'react'
import {
  CaretDownIcon,
  CaretUpIcon,
  ItemDescription,
  ItemsContainer,
  MenuItem,
  MenuSectionContainer,
  MenuSectionToggleeBox,
  MenuTitleBox,
} from './styles'
import './menuAnimation.css'
import { MenuContext } from '../../../../contexts/MenuContext'
import useFetch from '../../../../hooks/useFetch'
import { priceFormatter } from '../../../../utils/formatter'

type SectionState = Record<number, boolean>;

export const MenuSection = () => {
  const { menuData } = useContext(MenuContext)
  const { data } = useFetch()
  const [openSections, setOpenSections] = useState<SectionState>({})

  const currentCurrency = data?.ccy || 'BRL'

  const menuSections = menuData?.sections

  const toggleMenu = (sectionId: number) => {
    setOpenSections(prevState => ({
      ...prevState,
      [sectionId]: !prevState[sectionId]
    }))
  }

  return (
    <MenuSectionContainer>
      {menuSections?.map(section => {
        const items = section.items
        const isOpen = openSections[section.id]

        return (
          < MenuSectionToggleeBox key={section.id} >
            <MenuTitleBox>
              <h1>{section.name}</h1>
              <div onClick={() => toggleMenu(section.id)}>
                {isOpen ? <CaretDownIcon size={24} /> : <CaretUpIcon size={24} />}
              </div>
            </MenuTitleBox>
            <ItemsContainer className={isOpen ? 'closed' : 'open'}>

              {items.map(item => {
                const imageSrc = item.images && item.images.length > 0 ? item.images[0]?.image ?? "" : ""
                const description = item.description && item.description.length > 58 ? `${item.description.slice(0, 58)}...` : item.description
                const formattedPrice = priceFormatter(currentCurrency).format(item.price)

                return (
                  <MenuItem key={item.id}>
                    <ItemDescription>
                      <h3>{item.name}</h3>
                      <p>{description}</p>
                      <span>{formattedPrice}</span>
                    </ItemDescription>
                    {
                      imageSrc === ""
                        ? <></>
                        :
                        <img
                          src={imageSrc}
                          alt={item.name}
                        />
                    }
                  </MenuItem>
                )
              })}
            </ItemsContainer>
          </MenuSectionToggleeBox>
        )
      })}

    </MenuSectionContainer >
  )
}
