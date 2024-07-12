import {
  ReactNode,
  createContext,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { MenuDataSchemaType } from '../@types/menu.type'
import { GetMenuData } from '../services/menuService'

interface MenuContextType {
  menuData: MenuDataSchemaType | null
  setMenuData: React.Dispatch<React.SetStateAction<MenuDataSchemaType | null>>
}

export const MenuContext = createContext<MenuContextType>({
  menuData: null,
  setMenuData: () => {},
})
interface MenuContextProviderProps {
  children: ReactNode
}

const MenuContextProviderComponent = ({
  children,
}: MenuContextProviderProps) => {
  const [menuData, setMenuData] = useState<MenuDataSchemaType | null>(null)

  const fetchMenuData = useCallback(async () => {
    try {
      const responseMenuData = await GetMenuData()
      setMenuData(responseMenuData)
    } catch (error) {
      console.error('Error fetching menu data:', error)
    }
  }, [])

  useEffect(() => {
    fetchMenuData()
  }, [fetchMenuData])

  return (
    <MenuContext.Provider value={{ menuData, setMenuData }}>
      {children}
    </MenuContext.Provider>
  )
}

export const MenuContextProvider = memo(MenuContextProviderComponent)
