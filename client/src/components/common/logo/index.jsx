const Logo = () =>{
    const logo = {
        id:1,
        alt:'logo',
        url:'/img/veggiefruits-logo.png',
    }

    return(
        <div className="w-44">
            <img src={logo.url} alt={logo.alt}/>
        </div>
        
    )
}
export default Logo;