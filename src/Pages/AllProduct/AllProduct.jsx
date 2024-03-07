import useAllProducts from "../../Hooks/useAllProducts";
import AllProductCard from "./AllProductCard/AllProductCard";
import AllProductHead from "./AllProductHead/AllProductHead";

const AllProduct = () => {
    const [products] = useAllProducts();
    return (
        <div className="">
          <AllProductHead/>
            <div className="grid grid-cols-4 gap-[170px] w-[94%] mx-auto ">
            {
                products?.map(product=>
                <AllProductCard key={product._id} product={product}></AllProductCard>)
            }
            </div>

        </div>
    );
};

export default AllProduct;