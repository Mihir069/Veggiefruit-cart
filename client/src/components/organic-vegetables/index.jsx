import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { getAllProducts } from "../../services";
import { setOrganicVegetables } from "../../reducers/all-product-reducer";
import AddToCart from "../common/add-to-cart";

const OrganicVegetables = () => {
    const allOrganicVegetablesList = useSelector((state) => state.allProduct.organicVegetables);
    const dispatch = useDispatch();
    const containerRef = useRef(null);



    useEffect(() => {
        const fetchAllOrganicVegetables = async () => {
            try {
                const organicVegetableData = await getAllProducts(`organic-vegetables`);
                dispatch(setOrganicVegetables(organicVegetableData));
            } catch (error) {
                console.error('Error in fetching');
            }
        };
        fetchAllOrganicVegetables();
    }, [dispatch]);

    const scrollContainer = (direction) => {
        if (containerRef.current) {
            const scrollAmount = containerRef.current.clientWidth / 2; 
            containerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="p-4 sm:p-10 lg:p-10">
            <div className="flex flex-col lg:flex-row justify-between p-5">
                <div className="flex px-4 mb-4 lg:mb-0">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-600">
                        Fresh Organic Vegetables
                    </h2>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-end px-4 gap-5">
                    <div 
                        className="flex border border-amber-400 px-8 rounded-3xl cursor-pointer justify-center hover:bg-amber-400 ease-in-out duration-300"
                        onClick={() => scrollContainer('right')}
                    >
                        <img src="/svg/arrow-right-solid.svg" alt="arrow-left" className="w-4" />
                    </div>
                    <div 
                        className="flex border border-amber-400 px-8 rounded-3xl cursor-pointer justify-center hover:bg-amber-400 ease-in-out duration-300"
                        onClick={() => scrollContainer('left')}
                    >
                        <img src="/svg/arrow-left-solid.svg" alt="arrow-right" className="w-4" />
                    </div>
                </div>
            </div>
            <div className="relative flex overflow-hidden gap-4 py-4 px-2 sm:px-5">
                <div ref={containerRef} className="flex flex-row gap-4 overflow-x-auto w-full no-scrollbar" style={{ maxWidth: '100%', overflowX: 'scroll' }}>
                    {allOrganicVegetablesList.map((items) => (
                        <div className="flex-shrink-0 w-[45%] sm:w-[30%] md:w-[24%] p-3 " key={items.id} >
                            <div className="w-full border rounded-lg border-amber-400 hover:shadow-2xl ease-in-out duration-500">
                                <div className="relative overflow-hidden">
                                    <img src={items.url} alt={items.alt} className="rounded-t-lg w-full h-48 sm:h-56 hover:scale-125 ease-in-out duration-500" />
                                    <div className="absolute top-2 left-2 sm:top-4 sm:left-44 px-3 sm:px-5 text-slate-100 py-1 bg-lime-400 rounded-lg">
                                        {items.category}
                                    </div>
                                </div>
                                <div className="p-3 sm:p-5 text-center">
                                    <h6 className="text-lg sm:text-2xl font-semibold text-slate-600">
                                        {items.name}
                                    </h6>
                                    <p className="text-slate-500 mt-2 sm:mt-3 text-sm sm:text-base">
                                        {items.description}
                                    </p>
                                    <div className="pt-3 flex flex-row justify-between items-center">
                                        <div className="text-lg sm:text-xl font-customFont font-semibold text-slate-600">
                                            {items.price}
                                        </div>
                                        <div className="px-1">
                                            <AddToCart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrganicVegetables;
