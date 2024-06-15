import { useState } from "react";
import AllProducts from "../products/all-products";
import Breads from "../products/breads";
import Fruits from "../products/fruits";
import Meats from "../products/meats";
import Vegetables from "../products/vegetables";

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
    const [fade,setFade] = useState(false)
    const handleCategoryClick = (id) => {
        setFade(true)
        setTimeout(()=>{
            setFade(false)
            setActive(id)
        },300)
        
    };
    return (
        <div className="p-4 sm:p-10 lg:p-20">
            <div className="flex flex-col lg:flex-row justify-between p-5">
                <div className="flex px-4 mb-4 lg:mb-0">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-600">Our Organic Products</h2>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-end px-4">
                    {categories.map((items) => (
                        <div
                            key={items.id}
                            className={`w-[120px] sm:w-[140px] py-2 mx-1 sm:mx-2 cursor-pointer rounded-3xl ${active === items.id ? 'bg-amber-300 text-slate-100' : 'bg-slate-100'}`}
                            onClick={() => handleCategoryClick(items.id)}
                        >
                            <div className="text-center text-sm sm:text-lg">
                                {items.category}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                {active === categories[0].id && <AllProducts/>}
                {active === categories[1].id && <Breads/>}
                {active === categories[2].id && <Fruits/>}
                {active === categories[3].id && <Meats/>}
                {active === categories[4].id && <Vegetables/>}
            </div>
        </div>
    );
};

export default OrganicProducts;
