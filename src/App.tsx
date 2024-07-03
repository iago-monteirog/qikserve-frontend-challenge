import { GlobalStyle } from './styles/global'
import { ThemeContextProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <h1>Olá mundo</h1>
    </ThemeContextProvider>
  )
}

export default App
