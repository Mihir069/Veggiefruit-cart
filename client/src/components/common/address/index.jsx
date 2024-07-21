const Address = () => {
    const address = [
        { id: 1, url: '/svg/location-dot-solid-green.svg', title: 'Address', desc: '123 Street New York, USA' },
        { id: 2, url: '/svg/envelope-solid-green.svg', title: 'Mail Us', desc: 'info@example.com' },
        { id: 3, url: '/svg/phone-solid-green.svg', title: 'Telephone', desc: '+(012)34567890' }
    ];

    return (
        <div className="px-4">
            {
                address.map((item) => (
                    <div key={item.id} className="bg-slate-50 p-4 rounded-lg mb-4">
                        <img src={item.url} alt={item.title} className="w-8" />
                        <div className="flex flex-col ml-3">
                            <div className="text-lg text-slate-700 font-semibold">{item.title}</div>
                            <div className="text-slate-700">{item.desc}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Address;
