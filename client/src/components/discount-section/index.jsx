const DiscountSection = () => {
    const productItem = [
        {
            id: 1,
            url: '/img/featur-1.jpg',
            alt: 'featur-1',
            border: 'border-amber-400',
            title: 'text-slate-50',
            discount: 'text-lime-800',
            background: 'bg-amber-500',
            background1:'bg-lime-600',
            text1:'Fresh Apples',
            text2:'20% OFF'
        },
        {
            id: 2,
            url: '/img/featur-2.jpg',
            alt: 'featur-2',
            border: 'border-slate-600',
            title: 'text-lime-600',
            discount: 'text-slate-600',
            background: 'bg-slate-600',
            background1:'bg-slate-100',
            text1:'Tasty Fruits',
            text2:'Free delivery'
        },
        {
            id: 3,
            url: '/img/featur-3.jpg',
            alt: 'featur-3',
            border: 'border-lime-600',
            title: 'text-slate-50',
            discount: 'text-slate-600',
            background: 'bg-lime-600',
            background1:'bg-amber-500',
            text1:'Exotic Vegitable',
            text2:'Discount 30$'
        }
    ]
    return (
        <div className="container p-4 md:p-20">
            <div className="flex flex-col md:flex-row justify-between ">
                {
                    productItem.map((items) => (
                        <div key={items.id} className="px-2 md:px-4 p-3 cursor-pointer w-full md:w-auto">
                            <div className={`relative rounded-xl border ${items.border}`}>
                                <img src={items.url} alt={items.alt} className="p-2 w-full md:w-auto" />
                                <div className={`absolute top-52 md:top-72 left-1/2 transform -translate-x-1/2 flex flex-col text-center box-content h-32 w-48 md:w-64 rounded-xl ${items.background1}`}>
                                    <div className="p-2 md:p-5">
                                        <div className={`${items.title} text-lg md:text-2xl font-semibold`}>{items.text1}</div>
                                        <div className={`${items.discount} text-2xl md:text-3xl font-semibold font-customFont`}>{items.text2}</div>
                                    </div>
                                </div>
                                <div className={`box-content h-16 md:h-32 w-full  rounded-b-xl ${items.background}`}></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default DiscountSection;
