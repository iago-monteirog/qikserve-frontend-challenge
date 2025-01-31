import { ZodSchema } from 'zod'
import api from '../lib/axios'

export const fetchAndParseData = async <T>(
  url: string,
  schema: ZodSchema<T>,
): Promise<T> => {
  try {
    const response = await api.get(url, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    })

    const data = response.data

    return schema.parse(data)
  } catch (error) {
    console.error(`Error fetching data from ${url}`, error)
    throw new Error(`Error fetching data from ${url}`)
  }
}
