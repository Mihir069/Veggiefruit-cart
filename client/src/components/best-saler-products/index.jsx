import BestSellerCard from "../common/best-seller-card";

const BestSeller = () => {
    return (
        <div className="container p-5 flex flex-col items-center justify-center ">
            <div className="text-center max-w-2xl py-20">
                <div className="text-6xl font-bold my-4 text-slate-700 font-customFont">
                    Bestseller Products
                </div>
                <div className="text-base text-slate-600">
                    Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                </div>
            </div>
            <BestSellerCard />
        </div>
    );
}

export default BestSeller;
