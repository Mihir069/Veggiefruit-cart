import Banner from "../../components/banner";
import DiscountSection from "../../components/discount-section";
import FruitBanner from "../../components/fruit-banner";
import OrganicProducts from "../../components/organic-products";
import OrganicVegetables from "../../components/organic-vegetables";
import ShippingSection from "../../components/shipping-section";

const HomePage = () =>{
    return(
        <>
            <Banner/>
            <ShippingSection/>
            <OrganicProducts/>
            <DiscountSection/>
            <OrganicVegetables/>
            <FruitBanner/>
        </>
       
    )
}
export default HomePage;