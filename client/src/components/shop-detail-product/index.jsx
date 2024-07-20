import { useState } from "react";
import AddToCart from "../common/add-to-cart";

const ShopDetailProduct = () => {
    const product = [
        {
            id: 1,
            name: 'Brocoli',
            category: 'Vegetables',
            price: '3.35$',
            discription1: 'The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.',
            discription2: 'Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish'
        }
    ]
    const [count, setCount] = useState(0);

    const increament = () => {
        setCount(count + 1)
    }

    const decreament = () => {
        if(count>0){
            setCount(count - 1)
        }
        
    }
    return (
        <div className="p-2">
            <div className="">
                <div className="flex flex-row">
                    <img src="/img/single-item.jpg" alt="Search" className="w-6/12 border rounded-lg" />
                    <div className="px-5 ">
                        {
                            product.map((items) => (
                                <div key={items.id}>
                                    <div className="font-bold text-2xl text-slate-700 font-customFont">
                                        {items.name}
                                    </div>
                                    <div className="py-3 text-slate-500">
                                        Categories: {items.category}
                                    </div>
                                    <div className="py-3 text-slate-700 text-xl font-bold font-customFont">
                                        {items.price}
                                    </div><div className="py-3 text-slate-500">
                                        {items.discription1}
                                    </div>
                                    <div className="py-3 text-slate-500">
                                        Categories: {items.discription2}
                                    </div>
                                    <div className="py-3 flex items-center">
                                        <button onClick={decreament} className="text-2xl font-bold w-10 h-10 flex items-center justify-center border rounded-full bg-gray-200">-</button>
                                        <span className="px-4">{count}</span>
                                        <button onClick={increament} className="text-2xl font-bold w-10 h-10 flex items-center justify-center border rounded-full bg-gray-200">+</button>
                                    </div>
                                    <div className="py-7 w-40">
                                        <AddToCart/>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className="p-5">
                    ffr
                </div>
            </div>
        </div>
    )
}
export default ShopDetailProduct;