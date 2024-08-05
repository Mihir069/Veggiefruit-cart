import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ShoppingBag = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);

    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="relative w-7">
            <Link to='/cart'>
                <img src='/svg/bag-shopping-solid.svg' alt='bag' />
                {itemCount > 0 && (
                    <span className="absolute -top-1 bottom-0 -right-2 w-5 h-5 bg-amber-500 text-slate-800 text-xs rounded-full flex items-center justify-center">
                        {itemCount}
                    </span>
                )}
            </Link>
        </div>
    );
};

export default ShoppingBag;
