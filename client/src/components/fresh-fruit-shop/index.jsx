import FoodFilter from "../food-filter";
import FruitShopCategories from "../fruit-shop-categories";

const FreshFruitsShop = () => {
    return (
        <div className="container px-3 py-20">
            <div className="p-5 md:px-20 py-5 ">
                <FoodFilter />
            </div>
            <div className="px-20 py-5 grid grid-cols-2 gap-4 w-3/5">
                <FruitShopCategories />
                <div className="py-3 w-[266%]">eded</div>
            </div>
        </div>
    )
}

export default FreshFruitsShop;
