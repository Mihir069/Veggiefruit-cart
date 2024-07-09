import { useState } from "react"

const PriceBar = () => {
    const [price, setPrice] = useState(0);
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };
    return (
        <div className="py-3">
            <div className="text-2xl font-customFont font-semibold text-slate-500 mt-5">Price</div>
            <input type="range" className="w-full mt-2 bg-lime-500" min="0" max="500" value={price} onChange={handlePriceChange} />
            <output className="block mt-2 text-xl">{price}</output>
        </div>
    )
}
export default PriceBar;