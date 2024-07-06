import { SearchBarComponent } from '../../components/SearchBar'
import { Content, MenuBox, MenuContainer, ShopCartBox } from './styles'
import { Carrousel } from './components/Carrousel'
import { MenuSection } from './components/MenuSection'
import { useEffect } from 'react'
import { GetMenuData } from '../../services/menuService'

export const Menu = () => {
  useEffect(() => {
    async function getMenuData() {
      const data = await GetMenuData()

      console.log(data)
    }

    getMenuData()
  }, [])
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
