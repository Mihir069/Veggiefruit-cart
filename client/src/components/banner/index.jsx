import CarouselImage from "../common/carousel-image";

const Banner = () => {
    const bannerImg = {
        id: 1,
        alt: "banner-image",
        url: '/img/hero-img.jpg'
    };

    return (
        <div className="w-full relative bg-cover bg-center" style={{ backgroundImage: `url(${bannerImg.url})` }}>
            <div className="container py-24 px-6 md:px-20">
                <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
                    <div className="flex flex-col text-center md:text-left">
                        <p className="text-2xl font-semibold font-customFont text-amber-400">100% Organic Foods</p>
                        <h1 className="text-3xl md:text-[68px] font-bold mb-4 text-lime-600 leading-tight md:leading-[80px]">Organic Veggies & Fruits Foods</h1>
                        <div className="mt-5 relative flex z-50 justify-center md:justify-start">
                            <input type="text" placeholder="Search" className="border-amber-400 rounded-full border-2 px-4 md:px-6 py-3 md:py-5 md:w-[77%] focus:outline-none focus:ring focus:ring-gray-300" />
                            <button className="absolute z-10 text-white rounded-full border-2 font-semibold px-6 md:px-10 py-3 md:py-5 bg-lime-600 border-amber-400 right-8 md:right-[170px] hover:bg-amber-400 transition ease-in-out duration-300 focus:outline-none focus:ring focus:ring-gray-300">Submit Now</button>
                        </div>
                    </div>
                    <div className=" w-[52%]" > 
                        <CarouselImage />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
