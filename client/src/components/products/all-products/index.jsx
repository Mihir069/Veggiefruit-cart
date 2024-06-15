import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllProducts } from "../../../reducers/all-product-reducer";
import { getAllProducts } from "../../../services";
import ProductCard from "../../common/product-card";

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
        <ProductCard productItems ={allProductsList}/>
    )
}
export default AllProducts;
