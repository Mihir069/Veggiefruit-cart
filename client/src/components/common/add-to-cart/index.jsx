const AddToCart = () =>{
    return(
        <div className="border cursor-pointer py-2 px-3 rounded-2xl border-amber-300 hover:bg-amber-300 text-green-600 hover:text-slate-100 ease-in-out duration-500">
            <div className="flex flex-row items-center justify-center">
                <img src="/svg/bag-shopping-solid.svg" className="w-4"/>
                <div className=" px-2 font-semibold">Add to cart</div>
            </div>
            
        </div>
    )
}
export default AddToCart;