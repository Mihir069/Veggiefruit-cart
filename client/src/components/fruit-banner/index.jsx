const FruitBanner = () => {
    return (
      <div className="container py-3">
        <div className="p-5 sm:p-10 md:p-20 flex flex-col md:flex-row justify-between bg-amber-400">
          <div className="px-5 md:px-10 pt-10 md:pt-28 text-center md:text-left">
            <div className="text-4xl md:text-6xl text-slate-50 font-bold py-5">
              Fresh Exotic Fruits
            </div>
            <div className="text-4xl md:text-6xl text-slate-700">
              in Our Store
            </div>
            <p className="text-sm md:text-lg py-5 text-slate-700">
              The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words, etc.
            </p>
            <button className="border-2 border-slate-100 py-3 px-8 md:py-5 md:px-14 rounded-r-full rounded-l-full uppercase font-bold text-slate-600 hover:bg-lime-600 ease-in-out duration-300">
              Buy
            </button>
          </div>
          <div className="relative mt-10 md:mt-0">
            <img src="/img/baner-1.png" alt="banner-1" className="w-full md:w-[930px]" />
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none">
              <div className="border border-slate-200 rounded-full bg-slate-50 w-[100px] h-[100px] md:w-[140px] md:h-[140px] flex flex-col justify-center items-center">
                <div className="text-slate-600 text-4xl md:text-[100px] font-semibold font-customFont">
                  1
                </div>
                <div className="text-slate-600 text-lg md:text-[30px] font-semibold font-customFont">
                  50$
                </div>
                <div className="text-slate-500 text-base md:text-[28px] font-semibold font-customFont">
                  kg
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FruitBanner;
  