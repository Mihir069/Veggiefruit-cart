import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../reducers/cart-reducer';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const shippingRate = 5.00;

    const handleRemove = (item) => {
        dispatch(removeFromCart(item));
    };

    const handleQuantityChange = (item, newQuantity) => {
        if (newQuantity >= 1) {
            dispatch(updateQuantity({ ...item, quantity: newQuantity }));
        }
    };

    const subtotal = cartItems.reduce((total, item) => {
        return total + item.quantity * parseFloat(item.price.replace('$', ''));
    }, 0).toFixed(2);

    const total = (parseFloat(subtotal) + shippingRate).toFixed(2);

    return (
        <div className="mb-20 p-20">
            <div className="mt-4 overflow-x-auto">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <>
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100 border-b">
                                    <th className="py-2 px-4 text-left">Product</th>
                                    <th className="py-2 px-4 text-left">Name</th>
                                    <th className="py-2 px-4 text-left">Price</th>
                                    <th className="py-2 px-4 text-left">Quantity</th>
                                    <th className="py-2 px-4 text-left">Total</th>
                                    <th className="py-2 px-4 text-left">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map(item => (
                                    <tr key={item.id} className="border-b">
                                        <td className="py-2 px-4">
                                            <img src={item.url} alt={item.name} className="w-16 h-16 object-cover" />
                                        </td>
                                        <td className="py-2 px-4">{item.name}</td>
                                        <td className="py-2 px-4">{item.price}</td>
                                        <td className="py-2 px-4">
                                            <div className="flex items-center">
                                                <button
                                                    className="px-2 py-1 bg-gray-300 rounded-l"
                                                    onClick={() => handleQuantityChange(item, item.quantity - 1)}
                                                    disabled={item.quantity <= 1}
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    readOnly
                                                    className="w-12 text-center border"
                                                />
                                                <button
                                                    className="px-2 py-1 bg-gray-300 rounded-r"
                                                    onClick={() => handleQuantityChange(item, item.quantity + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4">
                                            ${(item.quantity * parseFloat(item.price.replace('$', ''))).toFixed(2)}
                                        </td>
                                        <td className="py-2 px-4 ">
                                            <button
                                                className="text-red-500 py-2 px-4 text-center items-center text-lg border rounded-full bg-slate-300"
                                                onClick={() => handleRemove(item)}
                                            >
                                                x
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='mt-10'>
                            <div className="w-full md:w-1/2 mt-5 md:mt-0">
                                <div className="flex flex-col text-center md:text-left w-[60%]">
                                    <div className="relative flex justify-center md:justify-start">
                                        <input
                                            type="text"
                                            placeholder="Coupon Code"
                                            className="rounded-full px-4 md:px-6 py-3 md:py-4 w-full md:w-[170px] "
                                        />
                                        <button
                                            className="absolute text-lime-500 rounded-full font-semibold px-6 md:px-10 py-3 md:py-4  right-4 md:right-8 border border-amber-500 hover:bg-amber-500 hover:text-slate-50 duration-300 ease-in-out "
                                        >
                                            Apply Coupon
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 font-bold float-right bg-slate-200 pr-20 p-5 flex flex-col">
                            <div className='text-3xl font-semibold'>
                                <span className='font-bold'>Cart</span> Total
                            </div>
                            <span>Subtotal: ${subtotal}</span>
                            <span>Shipping: ${shippingRate.toFixed(2)}</span>
                            <span>Total: ${total}</span>
                            <button
                                className=" text-lime-500 rounded-full font-semibold px-6 md:px-10 py-3 md:py-4  right-4 md:right-8 border border-amber-500 hover:bg-amber-500 hover:text-slate-50 duration-300 ease-in-out "
                            >
                                PROCEED CHECKOUT
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
