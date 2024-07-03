import { createContext, useState, ReactNode, useEffect, memo } from 'react'
import {
  createCustomerTheme,
  defaultCustomerTheme,
} from '../styles/themes/customerTheme'
import useFetch from '../hooks/useFetch'
import { ThemeProvider } from 'styled-components'
import { CustomerThemeType } from '../@types/customer.type'

interface ThemeContextProps {
  theme: CustomerThemeType
  setTheme: React.Dispatch<React.SetStateAction<CustomerThemeType>>
}

interface ThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultCustomerTheme,
  setTheme: () => {},
})

const ThemeContextProviderComponent = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<CustomerThemeType>(defaultCustomerTheme)
  const { data, error, loading } = useFetch()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (data && data.webSettings) {
      const customerTheme = createCustomerTheme(data.webSettings)
      setTheme(customerTheme)
      setIsLoading(false)
    }
  }, [data])

  if (isLoading || loading) return <div>Loading...</div>

  if (error) return <div>Error: {error.message}</div>

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const ThemeContextProvider = memo(ThemeContextProviderComponent)
