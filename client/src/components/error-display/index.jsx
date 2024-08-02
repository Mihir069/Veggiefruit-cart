const ErrorDisplay = () => {
    return (
        <div className="flex items-center justify-center py-20">
            <div className="text-center w-1/2">
                <div className="w-20 mx-auto">
                    <img src="/svg/triangle-exclamation-error.svg" alt="404" className="w-full" />
                </div>
                <div className="text-slate-600 text-4xl md:text-7xl py-2 font-bold font-customFont">
                    404
                </div>
                <h1 className="text-slate-600 text-4xl md:text-5xl py-2 font-semibold">
                    Page Not Found
                </h1>
                <p className=" md:text-xl mt-4 text-slate-400">
                    We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?
                </p>
                <div className="flex justify-center mt-5">
                    <div className="border cursor-pointer py-5 px-8 rounded-full border-amber-300 hover:bg-amber-300 text-green-600 hover:text-slate-100 ease-in-out duration-500">
                        <div className="flex flex-row items-center justify-center">
                            <div className=" text-lg font-semibold">Go Back To Home</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default ErrorDisplay;
