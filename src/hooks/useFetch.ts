import { useCallback, useEffect, useState } from 'react'
import { CustomerDataProps } from '../@types/customer.type'
import { GetCustomerData } from '../services/customerService'

interface FetchResult {
  data: CustomerDataProps | null
  loading: boolean
  error: Error | null
}

const useFetch = (): FetchResult => {
  const [data, setData] = useState<CustomerDataProps | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = useCallback(async () => {
      try {
        const customerData = await GetCustomerData()
        setData(customerData)
      } catch (error) {
        setLoading(false)
        setError(error as Error)
      } finally {
        setLoading(false)
      }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, loading, error }
}

export default useFetch
