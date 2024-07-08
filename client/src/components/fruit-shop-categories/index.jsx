import { useState } from "react";
import { Link } from "react-router-dom";

const FruitShopCategories = () => {
    const [price, setPrice] = useState(0);

    const fruitCategories = [
        { id: 1, name: "Apples", number: 3 },
        { id: 2, name: "Oranges", number: 5 },
        { id: 3, name: "Strawberry", number: 2 },
        { id: 4, name: "Banana", number: 8 },
        { id: 5, name: "Pumpkin", number: 5 },
    ];

    const additional = [
        { id: 1, name: "Organic", category: 'Categories-1' },
        { id: 2, name: "Fresh", category: 'Categories-2' },
        { id: 3, name: "Sales", category: 'Categories-3' },
        { id: 4, name: "Discount", category: 'Categories-4' },
        { id: 5, name: "Expired", category: 'Categories-5' },
    ]
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    return (
        <div>
            <div className="py-3">
                <div className="text-2xl font-customFont font-semibold text-slate-500">Categories</div>
                <ul>
                    {fruitCategories.map((item) => (
                        <li key={item.id} className="flex flex-row items-center justify-between">
                            <Link to="/" className="flex items-center py-2 font-medium text-lime-500 hover:text-amber-400 ease-in-out duration-300">
                                <img src="/svg/apple-whole-solid.svg" alt="apple" className="w-4 mr-2" />
                                {item.name}
                            </Link>
                            <span>{`(${item.number})`}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="py-3">
                <div className="text-2xl font-customFont font-semibold text-slate-500 mt-5">Price</div>
                <input type="range" className="w-full mt-2 bg-lime-500" min="0" max="500" value={price} onChange={handlePriceChange} />
                <output className="block mt-2 text-xl">{price}</output>
            </div>
            <div className="py-3">
                <div className="text-2xl font-customFont font-semibold text-slate-500 mt-5">Additional</div>
                {
                    additional.map((items) => (
                        <div className="py-2 flex items-center" key={items.id}>
                            <input type="radio" className="" id={items.category} name="category" />
                            <label htmlFor={items.category} className="px-2">{items.name}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FruitShopCategories;
