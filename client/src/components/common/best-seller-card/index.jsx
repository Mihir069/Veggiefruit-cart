import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../services";
import { setBestSeller } from "../../../reducers/all-product-reducer";
import AddToCart from "../add-to-cart";

const BestSellerCard = () => {
    const bestSellerList = useSelector((state) => state.allProduct.bestSeller)
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchBestSeller = async () => {
            try {
                const allProductsData = await getAllProducts(`best-seller`);
                dispatch(setBestSeller(allProductsData))
            } catch (error) {
                console.error('Error in fetching')
            }
        };
        fetchBestSeller();
    })
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  px-2 sm:px-5">
                {
                    bestSellerList.map((items) => (
                        <div className="p-6" key={items.id}>
                            <div className="flex flex-row bg-slate-100 rounded-lg p-5">
                                <div className="overflow-hidden">
                                    <img src={items.url} alt={items.alt} className="rounded-full w-40" />
                                </div>
                                <div className="p-3 sm:p-5 ">
                                    <h6 className="text-lg sm:text-2xl font-semibold text-slate-600">
                                        {items.name}
                                    </h6>
                                    <p className="mt-2 sm:mt-3 flex flex-row">
                                        <img src="/svg/star-solid.svg" alt="star" className="w-5" />
                                        <img src="/svg/star-solid.svg" alt="star" className="w-5" />
                                        <img src="/svg/star-solid.svg" alt="star" className="w-5" />
                                        <img src="/svg/star-solid.svg" alt="star" className="w-5" />
                                        <img src="/svg/star-solid-gray.svg" alt="star" className="w-5" />
                                    </p>
                                    <div className="pt-1">
                                        <div className="text-lg sm:text-xl font-customFont font-semibold text-slate-600 py-3">
                                            {items.price}
                                        </div>
                                        <div className="px-1">
                                            <AddToCart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex w-full overflow-hidden">
                <div className="flex flex-nowrap gap-4 w-full px-24">
                    {
                        bestSellerList.slice(0, 4).map((items) => (
                            <div className="w-full sm:w-1/3 md:w-1/4 p-3" key={items.id}>
                                <div className="w-full rounded-lg ">
                                    <div className="overflow-hidden">
                                        <img src={items.url} alt={items.alt} className="rounded-lg w-full h-48 sm:h-56" />
                                    </div>
                                    <div className="p-3 sm:p-5 text-center">
                                        <h6 className="text-lg sm:text-2xl font-semibold text-slate-600">
                                            {items.name}
                                        </h6>
                                        <div className="text-lg sm:text-xl font-customFont font-semibold text-slate-600 py-3">
                                            {items.price}
                                        </div>
                                        <div className="py-4">
                                            <AddToCart/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>

    )
}
export default BestSellerCard;