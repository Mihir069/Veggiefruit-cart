import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../../services";
import { setMeat } from "../../../reducers/all-product-reducer";
import ProductCard from "../../common/product-card";

const Meats = () =>{
    const allMeatsList = useSelector((state)=>state.allProduct.meat);
    const dispatch = useDispatch();

    const fetchMeat = async()=>{
        try{
            const allMeatsData = await getAllProducts(`meats`)
            dispatch(setMeat(allMeatsData))
        }catch(error){
            console.log('Error in fetch')
        }
    } 

    useEffect(()=>{
        fetchMeat();
    },[])
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-2 sm:px-5">
            <ProductCard productItems={allMeatsList}/>
        </div>
        
    )
}
export default Meats;