import { CustomerDataPropsSchema, CustomerDataProps } from "../@types/customer.type"
import api from "../lib/axios"

const URL_PATH = '/venue/9'

export const GetCustomerData = async (): Promise<CustomerDataProps> => {
    const response = await api.get(URL_PATH)

    const customerData = CustomerDataPropsSchema.parse(response.data)

    return customerData
}