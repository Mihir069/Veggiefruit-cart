import AddToCart from "../add-to-cart";
const ProductCard = ( {productItems} ) => {
    return (
        <>
            {productItems.map((items) => (
                <div className="p-3" key={items.id}>
                    <div className="border rounded-lg border-amber-400 hover:shadow-2xl ease-in-out duration-500">
                        <div className="relative overflow-hidden">
                            <img src={items.url} alt={items.alt} className="rounded-t-lg w-full h-48 sm:h-56 hover:scale-125 ease-in-out duration-500" />
                            <div className="absolute top-2 left-2 sm:top-4 sm:left-3 px-3 sm:px-5 text-slate-100 py-1 bg-amber-400 rounded-lg">
                                {items.category}
                            </div>
                        </div>
                        <div className="p-3 sm:p-5 text-center">
                            <h6 className="text-lg sm:text-2xl font-semibold text-slate-600">
                                {items.name}
                            </h6>
                            <p className="text-slate-500 mt-2 sm:mt-3 text-sm sm:text-base">
                                {items.description}
                            </p>
                            <div className="pt-3 flex flex-row justify-between items-center">
                                <div className="text-lg sm:text-xl font-customFont font-semibold text-slate-600">
                                    {items.price}
                                </div>
                                <div className="px-1">
                                    <AddToCart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default ProductCard;