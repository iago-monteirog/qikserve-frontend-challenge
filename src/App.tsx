import { GlobalStyle } from './styles/global'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <GlobalStyle />
        <Router />
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
