import { useEffect, useState } from "react"
import api from "../lib/axios";
import { RestaurantDataProps } from "../interfaces/data.interface";

interface FetchResult {
    data: RestaurantDataProps | null;
    loading: boolean;
    error: Error | null;
  }

const useFetch = (url: string): FetchResult => {
    const [data, setData] = useState<RestaurantDataProps | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(url);
                setData(response.data);
            } catch (error) {
                setLoading(false);
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url])

    return {data, loading, error}
}   

export default useFetch;