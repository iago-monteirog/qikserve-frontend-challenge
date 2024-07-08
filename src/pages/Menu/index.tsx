import { SearchBarComponent } from '../../components/SearchBar'
import { Content, MenuBox, MenuContainer, ShopCartBox } from './styles'
import { Carrousel } from './components/Carrousel'
import { MenuSection } from './components/MenuSection'
import { useRef } from 'react'

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
          <MenuSection  setSectionRefs={refs => (sectionRefs.current = refs.current)}/>
        </MenuBox>

        <ShopCartBox>
          <div>
            <h1>Carrinho</h1>
          </div>
          <div>
            <p>Seu carrinho está vazio</p>
          </div>
        </ShopCartBox>
      </Content>
    </MenuContainer>
  )
}
