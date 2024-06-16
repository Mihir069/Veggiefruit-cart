import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../../services";
import { setFruits } from "../../../reducers/all-product-reducer";
import ProductCard from "../../common/product-card";

const Fruits = () =>{
    const allFruitsList = useSelector((state)=>state.allProduct.fruit);
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchFruit = async()=>{
            try{
                const allFruitsData =  await getAllProducts(`fruits`);
                dispatch(setFruits(allFruitsData))
            }catch(error){
                console.error('Error in fetch')
            }
        }
        fetchFruit()
    },[dispatch])
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-2 sm:px-5">
            <ProductCard productItems={allFruitsList}/>
        </div>
        
    )
}
export default Fruits;