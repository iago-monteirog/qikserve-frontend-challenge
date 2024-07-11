import { MenuDataSchema, MenuDataSchemaType } from '../@types/menu.type'
import { fetchAndParseData } from '../utils/apiUtils';

const URL_PATH = '/menu'

export const GetMenuData = async (): Promise<MenuDataSchemaType> => {
  return fetchAndParseData<MenuDataSchemaType>(URL_PATH, MenuDataSchema)
}
