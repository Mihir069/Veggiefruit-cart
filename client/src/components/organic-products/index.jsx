import { useState } from "react";
import AllProducts from "../products/all-products";

const OrganicProducts = () => {
    const categories = [
        {
            id: 1,
            category: 'All products'
        },
        {
            id: 2,
            category: 'Vegetables'
        },
        {
            id: 3,
            category: 'Fruits'
        },
        {
            id: 4,
            category: 'Bread'
        },
        {
            id: 5,
            category: 'Meat'
        },
    ];

    const [active, setActive] = useState(categories[0].id);
    const handleCategoryClick = (id) => {
        setActive(id);
    };

    return (
        <div className="p-20">
            <div className="flex justify-between p-5">
                <div className="flex px-4">
                    <h2 className="text-4xl font-semibold text-slate-600">Our Organic Products</h2>
                </div>
                <div className="flex px-4">
                    {categories.map((items) => (
                        <div
                            key={items.id}
                            className={`w-[140px] py-2 mx-2 cursor-pointer rounded-3xl ${active === items.id ? 'bg-amber-300 text-slate-100' : 'bg-slate-100'}`}
                            onClick={() => handleCategoryClick(items.id)}
                        >
                            <div className="text-lg text-center">
                                {items.category}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <AllProducts />
        </div>
    );
};

export default OrganicProducts;
