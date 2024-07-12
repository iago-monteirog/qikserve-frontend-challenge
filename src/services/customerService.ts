import {
  CustomerDataProps,
  CustomerDataPropsSchema,
} from '../@types/customer.type'
import { fetchAndParseData } from '../utils/apiUtils'

const URL_PATH = '/venue/9'

export const GetCustomerData = async (): Promise<CustomerDataProps> => {
  return fetchAndParseData<CustomerDataProps>(URL_PATH, CustomerDataPropsSchema)
}
