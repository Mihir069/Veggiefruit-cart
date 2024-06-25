import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const CarouselImage = () => {
    const [current, setCurrent] = useState(0);

    const slides = [
        {
            id: 1,
            alt: 'hero-img-1',
            url: '/img/hero-img-1.png',
            text: 'Fruits',
            link:'/'
        },
        {
            id: 2,
            alt: 'hero-img-2',
            url: '/img/hero-img-2.jpg',
            text: 'Vegetables',
            link:'/'
        },
        {
            id:3,
            alt:'hero-img-3',
            url:'/img/hero-img.jpg',
            text:'Hero-Image',
            link:'/'
        }
    ];

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };
    useEffect(()=>{
        const sliderInterval = setInterval(nextSlide,3000);
        return ()=>{
            clearInterval(sliderInterval)
        }
    },[current])
    return (
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((item) => (
                    <div key={item.id} className="w-full relative flex-shrink-0 ">
                        <img src={item.url} alt={item.alt} className="w-full rounded-2xl" />
                        <div className="absolute bottom-40 left-52 text-2xl font-semibold text-white z-10  bg-amber-400 bg-opacity-50 px-8 py-5 rounded cursor-pointer">
                            <Link to={item.link}>
                                {item.text}
                            </Link>
                            
                        </div>
                    </div>
                ))}

            </div>
            <div className="absolute top-0 h-full w-full flex justify-between items-center px-10 text-3xl">
                <button onClick={prevSlide} className="rounded-full border border-slate-200 opacity-50 hover:opacity-75 bg-green-400 p-4 w-12 h-12 flex items-center justify-center">
                    <img src="/svg/chevron-left-solid.svg" alt="left-arrow" className="w-3 h-6" />
                </button>
                <button onClick={nextSlide} className="rounded-full border border-slate-200 opacity-50 hover:opacity-75 bg-green-400 p-4 w-12 h-12 flex items-center justify-center">
                    <img src="/svg/chevron-right-solid.svg" alt="left-arrow" className="w-3 h-6" />
                </button>
            </div>
        </div>
    );
};

export default CarouselImage;
