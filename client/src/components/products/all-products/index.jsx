import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllProducts } from "../../../reducers/all-product-reducer";
import { getAllProducts } from "../../../services";
import ProductCard from "../../common/product-card";

const AllProducts = () => {
    const allProductsList = useSelector((state) => state.allProduct.allProducts);
    const dispatch = useDispatch();

    const fetchAllProducts = async () => {
        try {
            const allProductsData = await getAllProducts(`all-products`);
            dispatch(setAllProducts(allProductsData))
        } catch (error) {
            console.error('Error in fetching')
        }
    };

    useEffect(() => {
        fetchAllProducts();
    }, []);


    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-2 sm:px-5">
            <ProductCard productItems ={allProductsList}/>
        </div>
        
    )
}
export default AllProducts;
