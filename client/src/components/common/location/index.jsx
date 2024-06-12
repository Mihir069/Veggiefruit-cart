const Location = () =>{
    const location = {
        id:1,
        alt:'location',
        url:'/svg/location-dot-solid.svg',
    }
    return(
        <div className="w-3 ">
            <img src={location.url} alt={location.alt}/>
        </div>
    
    )
}
export default Location;