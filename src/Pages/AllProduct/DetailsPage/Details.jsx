import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../../Hooks/UseAxiosPublic';
import { useQuery } from '@tanstack/react-query';




const Details = () => {
    const { id } = useParams();
    const axios = useAxiosPublic();
    const { data = {}} = useQuery({
        queryKey: ["details"],
        queryFn: async () => {
            const { data: allProduct } = await axios.get(`/all_products/${id}`)
            return allProduct
        }
        
    })
    const { _id, title,image,color,price,category } = data;

   
        let productTitle = title || ""
        if(title?.length > 15){
            productTitle = title.substring(0,15) + "..."
        }
    
    
    return (
        <div className='flex'>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h3>{productTitle}</h3>
                <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-red-700 dark:text-red-400">${price}</p>
                <p className="text-md font-semibold  dark:text-black">Color: {color}</p>
                </div>
                <div className="flex gap-4">
                <button className="bg-black text-white px-4 py-2 ">Buy Now </button>
                <button className="border border-black px-4 py-2 ">Add to Cart</button>
            </div>

            <h1>Total: ${price}</h1>
            </div>
        </div>
    );
};

export default Details;