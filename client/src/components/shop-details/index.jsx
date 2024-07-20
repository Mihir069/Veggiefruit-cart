import FruitShopCategories from "../fruit-shop-categories";
import ShopDetailProduct from "../shop-detail-product";

const ShopDetails = () => {
    return (
        <div className="container px-3 py-20">
            <div className="px-20 py-5 grid grid-cols-4 gap-4">
                <div className="col-span-3 py-3">
                    <ShopDetailProduct/>
                </div>
                <div className="col-span-1 w-full">
                    <div className="flex flex-row items-center border border-slate-400 rounded-lg w-full md:w-full">
                        <input type="search" className="p-3 flex-grow border-0" placeholder="keywords" />
                        <div className="w-12 py-4 flex items-center justify-center border-l border-slate-400 bg-slate-300 rounded-r-lg">
                            <img src="/svg/magnifying-glass-solid.svg" alt="Search" className="w-5 h-5" />
                        </div>
                    </div>
                    <FruitShopCategories />
                </div>
            </div>
        </div>
    )
}

export default ShopDetails;
