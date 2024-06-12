const Banner = () =>{
    const bannerImg = {
        id:1,
        alt:"banner-image",
        url:'/img/hero-img.jpg'
    }
    return(
        <div className="">
            <img src={bannerImg.url} alt={bannerImg.alt}/>
        </div>
    )
}
export default Banner;