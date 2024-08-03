import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import FreshFruitsShop from "../../components/fresh-fruit-shop";
import Header from "../../components/header";
import ShopHeader from "../../components/shop-header";
import Loader from "../../components/common/loader";

const ShopPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            await new Promise(resolve => setTimeout(resolve, 100))
            setLoading(false)
        }
        loadData()
    }, [])

    // if (loading) {
    //     return (
    //         <Loader/>
    //     )
    // }
    return (
        <>
            <Loader isVisible={loading} />
            {
                !loading && (
                    <>
                        <Header />
                        <ShopHeader />
                        <FreshFruitsShop />
                        <Footer />
                    </>

                )
            }

        </>
    )
}
export default ShopPage;
