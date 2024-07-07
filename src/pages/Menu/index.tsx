import { SearchBarComponent } from '../../components/SearchBar'
import { Content, MenuBox, MenuContainer, ShopCartBox } from './styles'
import { Carrousel } from './components/Carrousel'
import { MenuSection } from './components/MenuSection'

export const Menu = () => {

  return (
    <MenuContainer>
      <SearchBarComponent />

      <Content>
        <MenuBox>
          <Carrousel />
          <MenuSection />
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
