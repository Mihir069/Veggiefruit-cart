import { Link } from "react-router-dom";

const ShoppingBag = () => {
    const bag = {
        id: 1,
        alt: 'bag',
        url: '/svg/bag-shopping-solid.svg'
    }
    return (
        <div className="w-7">
            <Link to='/shop-details'>
                <img src={bag.url} alt={bag.alt} />
            </Link>

        </div>

    )
}
export default ShoppingBag;