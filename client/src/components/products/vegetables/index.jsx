import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../../services";
import { setVegetable } from "../../../reducers/all-product-reducer";
import ProductCard from "../../common/product-card";

const Vegetables = () =>{
    const allVegetablesList = useSelector((state)=>state.allProduct.vegerable)
    const dispatch = useDispatch();

    const fetchVegetables = async() =>{
        try{
            const allVegetablesData = await getAllProducts(`vegetables`);
            dispatch(setVegetable(allVegetablesData))
        }catch(error){
            console.log('Error in fetching')
        }
    };

    useEffect(()=>{
        fetchVegetables()
    },[])
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-2 sm:px-5">
            <ProductCard productItems={allVegetablesList}/>
        </div>
        
    )
}
export default Vegetables;