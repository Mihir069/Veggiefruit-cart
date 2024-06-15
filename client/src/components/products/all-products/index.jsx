import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllProducts } from "../../../reducers/all-product-reducer";
import { getAllProducts } from "../../../services";
import AddToCart from "../../common/add-to-cart";

const AllProducts = () => {
    const allProductsList = useSelector((state) => state.allProduct.allProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const allProductsData = await getAllProducts(`all-products`);
                dispatch(setAllProducts(allProductsData))
            } catch (error) {
                console.error('Error in fetching')
            }
        };
        fetchAllProducts();
    }, [dispatch])
    return (
        <div className="grid grid-cols-4 py-4 px-5">
            {allProductsList.map((items) => (
                <div className="p-5 " key={items}>
                    <div className="border rounded-lg border-amber-400 hover:shadow-2xl ease-in-out duration-500" >
                        <div className="relative overflow-hidden">
                            <img src={items.url} alt={items.alt} className="rounded-t-lg w-full h-56 hover:scale-125 ease-in-out duration-500"/>
                            <div className="absolute top-4 left-3 px-5 text-slate-100 py-1 bg-amber-400 rounded-lg">
                                {items.category}
                            </div>
                        </div>
                        <div className="p-5 text-center">
                            <h6 className="text-2xl font-semibold text-slate-600">
                                {items.name}
                            </h6>
                            <p className="text-slate-500 mt-3">
                                {items.description}
                            </p>
                            <div className="pt-3 flex flex-row justify-between">
                                <div className="text-xl p-1">
                                {items.price}
                                </div>
                                
                                <div className="">
                                <AddToCart/>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>

            ))}
        </div>
    )
}
export default AllProducts;