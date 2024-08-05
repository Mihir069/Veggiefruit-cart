import { useDispatch } from "react-redux";
import { addTocart } from "../../../reducers/cart-reducer";
import PropTypes from 'prop-types'
const AddToCart = ({item}) =>{
    const dispatch = useDispatch();
    
    const handleAddToCart = () =>{
        dispatch(addTocart(item))
    }
    return(
        <div 
            className="border cursor-pointer py-2 px-3 rounded-2xl border-amber-300 hover:bg-amber-300 text-green-600 hover:text-slate-100 ease-in-out duration-500"
            onClick={handleAddToCart}
        >
            <div className="flex flex-row items-center justify-center">
                <img src="/svg/bag-shopping-solid.svg" className="w-4"/>
                <div className=" px-2 font-semibold">Add to cart</div>
            </div>
            
        </div>
    )
};

AddToCart.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    }).isRequired
};
export default AddToCart;