import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../../services";
import { setVegetable } from "../../../reducers/all-product-reducer";
import ProductCard from "../../common/product-card";

const Vegetables = () =>{
    const allVegetablesList = useSelector((state)=>state.allProduct.vegerable)
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchVegetables = async() =>{
            try{
                const allVegetablesData = await getAllProducts(`vegetables`);
                dispatch(setVegetable(allVegetablesData))
            }catch(error){
                console.log('Error in fetching')
            }
        };
        fetchVegetables()
    },[dispatch])
    return(
        <ProductCard productItems={allVegetablesList}/>
    )
}
export default Vegetables;