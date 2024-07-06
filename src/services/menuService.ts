import { MenuDataSchema, MenuDataSchemaType } from '../@types/menu.type'
import api from '../lib/axios'

const URL_PATH = '/menu'

export const GetMenuData = async (): Promise<MenuDataSchemaType> => {
  const response = await api.get(URL_PATH)

  const menuData = MenuDataSchema.parse(response.data)

  return menuData
}
