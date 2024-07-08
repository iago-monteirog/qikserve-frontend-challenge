import { SearchBarComponent } from '../../components/SearchBar'
import { Content, MenuBox, MenuContainer } from './styles'
import { Carrousel } from './components/Carrousel'
import { MenuSection } from './components/MenuSection'
import { useRef } from 'react'
import { ShopCart } from './components/ShopCart'

export const Menu = () => {
  const sectionRefs = useRef<Record<number, HTMLDivElement | null>>({})

  const scrollToSection = (sectionId: number) => {
    const sectionElement = sectionRefs.current[sectionId];
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MenuContainer>
      <SearchBarComponent />

      <Content>
        <MenuBox>
          <Carrousel scrollToSection={scrollToSection} />
          <MenuSection setSectionRefs={refs => (sectionRefs.current = refs.current)} />
        </MenuBox>

        <ShopCart />
      </Content>
    </MenuContainer>
  )
}
