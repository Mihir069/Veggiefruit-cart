const FeatureProducts = () => {
    const featureProducts = [
        { id: 1, name: "Big Banana", price: "2.99 $", url: "/img/featur-1.jpg", alt: "featur-1", discount: "4.11$" },
        { id: 2, name: "Big Banana", price: "2.99 $", url: "/img/featur-2.jpg", alt: "featur-2", discount: "4.11$" },
        { id: 3, name: "Big Banana", price: "2.99 $", url: "/img/featur-3.jpg", alt: "featur-3", discount: "4.11$" },
    ]
    return (
        <div className="py-3">
            <div className="text-2xl font-customFont font-semibold text-slate-500 mt-5">Featured products</div>
            {
                featureProducts.map((item) => (
                    <div key={item.id} className="flex flex-row items-center">
                        <div to="/" className="flex items-center py-2 font-medium text-lime-500 hover:text-amber-400 ease-in-out duration-300">
                            <img src={item.url} alt={item.alt} className="w-24 mr-2" />
                        </div>
                        <div className="font-semibold text-slate-600 ">
                            {item.name}<br />
                            <span className="font-customFont font-bold text-xl">{item.price}</span>
                            <span className="line-through font-customFont font-bold text-xl px-2 text-red-600">{item.discount}</span>

                        </div>
                    </div>
                ))
            }
            <div className="border cursor-pointer py-4 px-3 my-14 rounded-full border-amber-300 hover:bg-amber-300 text-green-600 hover:text-slate-100 ease-in-out duration-500">
                <div className="flex flex-row items-center justify-center">
                    <div className=" px-2 font-semibold">View More</div>
                </div>

            </div>
        </div>
    )
}
export default FeatureProducts;