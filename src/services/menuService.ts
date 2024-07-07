import { MenuDataSchema, MenuDataSchemaType } from '../@types/menu.type'
import { SectionsSchema } from '../@types/section.type';
import api from '../lib/axios'
import { z } from 'zod'

const URL_PATH = '/menu'

export const GetMenuData = async (): Promise<MenuDataSchemaType> => {
  const response = await api.get(URL_PATH);
  const data = response.data;

  try {
    SectionsSchema.parse(data.sections);

    MenuDataSchema.parse(data);

    
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Validation error:', error.errors);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  } finally {
    return data;
  }
}
