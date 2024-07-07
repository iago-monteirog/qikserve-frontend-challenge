import { GlobalStyle } from './styles/global'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { MenuContextProvider } from './contexts/MenuContext'

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <MenuContextProvider>
          <GlobalStyle />
          <Router />
        </MenuContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
