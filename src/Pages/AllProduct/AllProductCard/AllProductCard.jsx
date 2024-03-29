import { Link } from "react-router-dom";


const AllProductCard = ({product}) => {
    let productTitle = product?.title || ""
    if(product?.title?.length > 53){
        productTitle = product.title.substring(0,54) + "..."
    }
    return (
        <Link to={`/details/${product._id}`}>
            <div className="max-w-[350px] md:w-[350px] p-6 shadow-lg my-20 space-y-4 rounded-lg">
            <img alt="Product Image" className="w-[350px] h-[275px] object-cover  rounded-lg " src={product?.image} />
            <div className="grid gap-2">
                <h1 className="text-lg font-semibold ">{productTitle}</h1>
                
                <div className="flex justify-between ">
                <p className="text-lg font-bold text-red-700 dark:text-red-400">${product?.price}</p>
                <p className="text-md font-semibold  dark:text-black">Color: {product?.color}</p>
                </div>
            </div>
            <div className="flex gap-4">
                <button className="bg-black text-white px-4 py-2 rounded-md">Add to Cart</button>
                <button className="border border-black px-4 py-2 rounded-md">View Details</button>
            </div>
        </div>
        </Link>
    );
};

export default AllProductCard;