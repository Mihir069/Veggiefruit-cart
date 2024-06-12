const Menu = () =>{
    const menu = {
        id:1,
        alt:'menu',
        url:'/svg/bars-solid.svg',
    }

    return(
        <div className="w-9 p-2 border rounded-lg ">
            <img src={menu.url} alt={menu.alt}/>
        </div>
        
    )
}

export default Menu;