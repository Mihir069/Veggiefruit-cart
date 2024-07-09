import BestSellerCard from "../common/best-seller-card";

const BestSeller = () => {
    return (
        <div className="container p-5 flex flex-col items-center justify-center">
            <div className="text-center max-w-2xl py-10 md:py-20">
                <div className="text-3xl md:text-6xl font-bold my-4 text-slate-700 font-customFont">
                    Bestseller Products
                </div>
                <div className="text-sm md:text-base text-slate-600">
                    Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                </div>
            </div>
            <div className="w-full">
                <BestSellerCard />
            </div>
        </div>
    );
}

export default BestSeller;
