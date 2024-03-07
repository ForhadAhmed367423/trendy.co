import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllProducts = () => {
    const axiosSecure = useAxiosSecure();
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosSecure.get("/all_products")
            return res.data;
        }
        
    })
    return [products,refetch]
};

export default useAllProducts;