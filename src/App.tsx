import { GlobalStyle } from './styles/global'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { MenuContextProvider } from './contexts/MenuContext'
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <CartProvider>
          <MenuContextProvider>
            <GlobalStyle />
            <Router />
          </MenuContextProvider>
        </CartProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
