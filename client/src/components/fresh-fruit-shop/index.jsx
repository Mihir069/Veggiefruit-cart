import { Link } from "react-router-dom";
import CategoriesProducts from "../categories-product";
import FoodFilter from "../food-filter";
import FruitShopCategories from "../fruit-shop-categories";

const FreshFruitsShop = () => {
    return (
        <div className="container px-3 py-20">
            <div className="p-5 md:px-20 py-5 ">
                <FoodFilter />
            </div>
            <div className="px-20 py-5 grid grid-cols-2 gap-4 w-6/12">
                <FruitShopCategories />
                <div className="py-3 w-[371%] text-center">
                    <CategoriesProducts/>
                    <div className="flex flex-row justify-center mt-5">
                        <Link to="/" className="rounded border border-amber-300 mx-2 px-4 py-2 cursor-pointer bg-lime-600 hover:bg-lime-600 duration-300 ease-in-out">1</Link>
                        <Link to="/" className="rounded border border-amber-300 mx-2 px-4 py-2 cursor-pointer hover:bg-lime-600 duration-300 ease-in-out">2</Link>
                        <Link to="/" className="rounded border border-amber-300 mx-2 px-4 py-2 cursor-pointer hover:bg-lime-600 duration-300 ease-in-out">3</Link>
                        <Link to="/" className="rounded border border-amber-300 mx-2 px-4 py-2 cursor-pointer hover:bg-lime-600 duration-300 ease-in-out">4</Link>
                        <Link to="/" className="rounded border border-amber-300 mx-2 px-4 py-2 cursor-pointer hover:bg-lime-600 duration-300 ease-in-out">5</Link>
                        <Link to="/" className="rounded border border-amber-300 mx-2 px-4 py-2 cursor-pointer hover:bg-lime-600 duration-300 ease-in-out">6</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreshFruitsShop;
