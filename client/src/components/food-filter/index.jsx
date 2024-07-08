const FoodFilter = () => {
    return (
        <>
            <h1 className="text-2xl md:text-4xl font-customFont font-bold text-slate-600 text-center md:text-left">Fresh fruit shop</h1>
            <div className="flex flex-col md:flex-row md:justify-between py-5 gap-4">
                <div className="flex flex-row items-center border border-slate-400 rounded-lg w-full md:w-[27%]">
                    <input type="search" className="p-3 flex-grow border-0" placeholder="keywords" />
                    <div className="w-12 py-4 flex items-center justify-center border-l border-slate-400 bg-slate-300 rounded-r-lg">
                        <img src="/svg/magnifying-glass-solid.svg" alt="Search" className="w-5 h-5" />
                    </div>
                </div>
                <div className="flex flex-row items-center bg-slate-200 px-3 rounded w-full md:w-auto">
                    <label htmlFor="fruit" className="text-black font-semibold mr-2">Default Sorting:</label>
                    <select id="fruit" className="p-2 border-0 bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-700 w-full md:w-auto">
                        <option value="nothing">Nothing</option>
                        <option value="popularity">Popularity</option>
                        <option value="organic">Organic</option>
                        <option value="fantastic">Fantastic</option>
                    </select>
                </div>
            </div>
        </>
    );
}
export default FoodFilter;
