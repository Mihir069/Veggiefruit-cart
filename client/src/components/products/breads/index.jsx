import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../../services";
import { setBread } from "../../../reducers/all-product-reducer";
import ProductCard from "../../common/product-card";

const Breads = () =>{
    const allBreadsList = useSelector((state)=>state.allProduct.bread);
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchBreads = async()=>{
            try{
                const allBreadsData = await getAllProducts(`breads`);
                dispatch(setBread(allBreadsData))
            }catch(error){
                console.error('Error in fetch')
            }
        }
        fetchBreads();
    },[dispatch])
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-2 sm:px-5">
            <ProductCard productItems={allBreadsList}/>
        </div>
        
    )
}
export default Breads;