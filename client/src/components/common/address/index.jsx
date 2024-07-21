const Address = () => {
    const address = [
        { id: 1, url: '/svg/location-dot-solid-green.svg', title: 'Address', desc: '123 Street New York,USA' },
        { id: 2, url: '/svg/envelope-solid-green.svg', title: 'Mail Us', desc: 'info@example.com' },
        { id: 3, url: '/svg/phone-solid-green.svg', title: 'Telephone', desc: '+(012)34567890' }

    ]
    return (
        <div className="px-20">
            {
                address.map((items) => (
                    <div key={items.id} className="flex flex-row bg-slate-50 p-8 rounded-lg  gap-5 mb-10">
                        <div className="w-8">
                            <img src={items.url} alt={items.title} className="w-full" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="px-3 text-2xl text-slate-700 font-semibold">
                                {items.title}
                            </div>
                            <div className="px-3 text-slate-700 text-lg">{items.desc}</div>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    );
}

export default Address;
