const FeatureBanner = () => {
    return (
        <div className="py-3">
            <div className="relative">
                <img src="/img/banner-fruits.jpg" alt="banner-fruit" className="w-full h-auto" />
                <div className="absolute top-0 right-7 w-[20%] h-full flex items-center justify-center">
                    <h1 className="text-amber-400 text-3xl font-bold">Fresh Fruits Banner</h1>
                </div>
            </div>

        </div>
    )
}
export default FeatureBanner;