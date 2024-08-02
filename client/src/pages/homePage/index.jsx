import { useEffect, useState } from "react";
import Banner from "../../components/banner";
import BestSeller from "../../components/best-saler-products";
import ConsumerService from "../../components/consumer-service";
import DiscountSection from "../../components/discount-section";
import Footer from "../../components/footer";
import FruitBanner from "../../components/fruit-banner";
import Header from "../../components/header";
import OrganicProducts from "../../components/organic-products";
import OrganicVegetables from "../../components/organic-vegetables";
import ShippingSection from "../../components/shipping-section";
import Loader from "../../components/common/loader";


const HomePage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            await new Promise(resolve => setTimeout(resolve, 100))
            setLoading(false)
        }
        loadData();
    }, [])

    if (loading) {
        return (
            <Loader />
        )
    }
    return (
        <div className="w-full">
            <Header />
            <div className="w-full">
                <Banner />
            </div>
            <div className="mx-auto mt-8">
                <ShippingSection />
            </div>
            <div className=" mx-auto mt-8">
                <OrganicProducts />
            </div>
            <div className="mx-auto mt-8">
                <DiscountSection />
            </div>
            <div className="mx-auto mt-8">
                <OrganicVegetables />
            </div>
            <div className="w-full">
                <FruitBanner />
            </div>
            <div className="mx-auto mt-8">
                <BestSeller />
            </div>
            <div className="mx-auto  mt-8">
                <ConsumerService />
            </div>
            <div className="mx-auto  mt-8">
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;
