import Users from "../common/users";

const ConsumerService = () => {
    const consumer = [
        {
            id: 1,
            title: 'Satisfied Customers',
            num: 1963
        },
        {
            id: 2,
            title: 'Quality of Service',
            num: '99%'
        },
        {
            id: 3,
            title: 'Quality Certificates',
            num: 33
        },
        {
            id: 4,
            title: 'Available Products',
            num: 789
        }
    ];

    return (
        <div className="container p-6 md:p-24 flex justify-center">
            <div className="flex flex-col md:flex-row gap-4 bg-slate-100 px-6 md:px-10 py-6 md:py-10 rounded-xl">
                {
                    consumer.map((item) => (
                        <div 
                            className="p-6 md:p-12 bg-slate-50 shadow-xl flex flex-col items-center text-center justify-center rounded-xl" 
                            key={item.id}
                        >
                            <div className="p-2 w-12 md:w-24">
                                <Users />
                            </div>
                            <div className="text-xl md:text-2xl uppercase text-lime-600 font-semibold">
                                {item.title}
                            </div>
                            <div className="text-2xl md:text-4xl font-customFont font-semibold text-slate-600">
                                {item.num}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ConsumerService;
