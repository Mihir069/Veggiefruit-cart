const ShoppingBag = () =>{
    const bag = {
        id:1,
        alt:'bag',
        url:'/svg/bag-shopping-solid.svg'
    }
    return(
        <div className="w-7">
            <img src={bag.url} alt={bag.alt}/>
        </div>
        
    )
}
export default ShoppingBag;