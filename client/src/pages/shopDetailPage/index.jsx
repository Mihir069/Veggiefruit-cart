import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import OrganicVegetables from "../../components/organic-vegetables";
import ShopDetails from "../../components/shop-details";
import ShopHeader from "../../components/shop-header";
import Loader from "../../components/common/loader";

const ShopDetailPage = () => {
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
    //         <Loader />
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
                        <ShopDetails />
                        <OrganicVegetables />
                        <Footer />
                    </>

                )
            }
        </>
    )
}
export default ShopDetailPage;