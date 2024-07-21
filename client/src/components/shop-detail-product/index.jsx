import { useState } from "react";
import AddToCart from "../common/add-to-cart";
import FruitDescription from "../fruit-description";
import FruitReview from "../fruit-review";
import LeaveReview from "../common/leave-review";

const ShopDetailProduct = () => {
    const product = {
        id: 1,
        name: 'Broccoli',
        category: 'Vegetables',
        price: '3.35$',
        description1: 'The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.',
        description2: 'Suspendisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish'
    };
    
    const [count, setCount] = useState(0);
    const [activeTab, setActiveTab] = useState('description');

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div className="py-2">
            <div className="flex flex-col md:flex-row">
                <img src="/img/single-item.jpg" alt="Product" className="w-full md:w-6/12 border rounded-lg mb-4 md:mb-0" />
                <div className="md:px-5 flex-grow">
                    <div className="font-bold text-2xl text-slate-700 font-customFont">
                        {product.name}
                    </div>
                    <div className="py-3 text-slate-500">
                        Categories: {product.category}
                    </div>
                    <div className="py-3 text-slate-700 text-xl font-bold font-customFont">
                        {product.price}
                    </div>
                    <div className="py-3 text-slate-500">
                        {product.description1}
                    </div>
                    <div className="py-3 text-slate-500">
                        {product.description2}
                    </div>
                    <div className="py-3 flex items-center">
                        <button onClick={decrement} className="text-2xl font-bold w-10 h-10 flex items-center justify-center border rounded-full bg-gray-200">-</button>
                        <span className="px-4">{count}</span>
                        <button onClick={increment} className="text-2xl font-bold w-10 h-10 flex items-center justify-center border rounded-full bg-gray-200">+</button>
                    </div>
                    <div className="py-7 w-full md:w-40">
                        <AddToCart />
                    </div>
                </div>
            </div>
            <div className="py-5">
                <div className="border-b border-slate-500 flex flex-row">
                    <div className={`px-3 text-lg py-3 cursor-pointer ${activeTab === 'description' ? 'text-lime-500 border-b border-lime-600' : 'text-slate-500'}`} onClick={() => setActiveTab('description')}>Description</div>
                    <div className={`px-3 text-lg py-3 cursor-pointer ${activeTab === 'reviews' ? 'text-lime-500 border-b border-lime-600' : 'text-slate-500'}`} onClick={() => setActiveTab('reviews')}>Reviews</div>
                </div>
                {activeTab === 'description' && <FruitDescription />}
                {activeTab === 'reviews' && <FruitReview />}
            </div>
            <div className="pt-10">
                <LeaveReview/>
            </div>
        </div>
    )
}

export default ShopDetailProduct;
