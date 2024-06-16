import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../services";
import { setBestSeller } from "../../../reducers/all-product-reducer";
import ProductCard from "../product-card";

const BestSellerCard = () =>{
    const bestSellerList = useSelector((state)=>state.allProduct.bestSeller)
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchBestSeller = async () => {
            try {
                const allProductsData = await getAllProducts(`best-seller`);
                dispatch(setBestSeller(allProductsData))
            } catch (error) {
                console.error('Error in fetching')
            }
        };
        fetchBestSeller();
    })
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 py-4 px-2 sm:px-5">
            <ProductCard productItems={bestSellerList}/>
        </div>
    )
}
export default BestSellerCard;