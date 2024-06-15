const ShippingSection = () => {
    const icons = [
        {
            id: 1,
            url: '/svg/car-side-solid.svg',
            alt: 'car',
            title: 'Free Shipping',
            discription: 'Free on order over $300'
        },
        {
            id: 2,
            url: '/svg/user-shield-solid.svg',
            alt: 'user',
            title: 'Security Payment',
            discription: '100% security payment'
        },
        {
            id: 3,
            url: '/svg/right-left-solid.svg',
            alt: 'right-left',
            title: '30 Day Return',
            discription: '30 day money guarantee'
        },
        {
            id: 4,
            url: '/svg/phone-solid.svg',
            alt: 'phone',
            title: '24/7 Support',
            discription: 'Support every time fast'
        },
    ]
    return (
        <div className="container p-20">
            <div className="flex flex-wrap ">
                {
                    icons.map((items) => (
                        <div key={items.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-5 mb-4">
                            <div className="bg-slate-100 rounded-xl p-4 text-white h-auto flex flex-col items-center text-center">
                                <div className="relative bg-amber-400 rounded-full p-10 flex items-center justify-center">
                                    <img src={items.url} alt={items.alt} className="w-10 " />
                                    <div className="absolute -bottom-4">
                                        <img src="/svg/diamond-solid.svg" alt="diamond" className="w-10" />
                                    </div>
                                </div>
                                <div className="mt-10 mb-2">
                                    <h3 className="text-xl text-slate-600 font-semibold ">{items.title}</h3>
                                    <p className="text-slate-400">{items.discription}</p>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>

        </div>
    )
}
export default ShippingSection