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
        <ProductCard productItems={allFruitsList}/>
    )
}
export default Fruits;