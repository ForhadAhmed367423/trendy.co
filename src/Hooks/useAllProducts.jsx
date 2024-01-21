import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllProducts = () => {
    const axiosSecure = useAxiosSecure();
    const { data: items = [], refetch } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await axiosSecure.get("/items")
            return res.data;
        }
        
    })
    return [items,refetch]
};

export default useAllProducts;