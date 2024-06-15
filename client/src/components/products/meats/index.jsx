import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../../services";
import { setMeat } from "../../../reducers/all-product-reducer";
import ProductCard from "../../common/product-card";

const Meats = () =>{
    const allMeatsList = useSelector((state)=>state.allProduct.meat);
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchMeat = async()=>{
            try{
                const allMeatsData = await getAllProducts(`meats`)
                dispatch(setMeat(allMeatsData))
            }catch(error){
                console.log('Error in fetch')
            }
        } 
        fetchMeat();
    },[dispatch])
    return(
        <ProductCard productItems={allMeatsList}/>
    )
}
export default Meats;