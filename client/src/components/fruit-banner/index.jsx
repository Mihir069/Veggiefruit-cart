const FruitBanner = () =>{
    return(
        <div className="container py-3">
            <div className="p-20 flex flex-row justify-between bg-amber-500">
                <div className="px-10 pt-28">
                    <div className="text-6xl text-slate-50 font-bold py-5">Fresh Exotic Fruits</div>
                    <div className="text-6xl text-slate-700 ">in Out Store</div>
                    <p className="text-lg py-5 text-slate-700">
                    The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
                    </p>
                    <button className="border-2 border-slate-100 py-5 px-14 rounded-r-full rounded-l-full uppercase font-bold text-slate-600 hover:bg-lime-600 ease-in-out duration-300">
                        Buy
                    </button>
                </div>
                <div className="relative">
                    <img src="/img/baner-1.png" alt="baner-1" className="w-[930px]"/>
                    <div className="absolute top-1">
                        <div className="border border-slate-200 rounded-full bg-slate-50 w-[140px] h-[140px] ">
                            <div className=" absolute text-slate-600 -top-3 left-[20px] text-[100px] font-semibold font-customFont">
                                1
                            </div>
                            <div className=" absolute text-slate-600 top-8 left-[65px] text-[30px] font-semibold font-customFont">
                                50$
                            </div>
                            <div className=" absolute text-slate-500 top-16 left-[65px] text-[28px] font-semibold font-customFont">
                                kg
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default FruitBanner;