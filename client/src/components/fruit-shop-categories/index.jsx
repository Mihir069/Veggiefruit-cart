import Additional from "./additional";
import Categories from "./categories";
import FeatureBanner from "./feature-banner";
import FeatureProducts from "./featured-products";
import PriceBar from "./price-bar";

const FruitShopCategories = () => {
    return (
        <div>
            <Categories/>
            <PriceBar/>
            <Additional/>
            <FeatureProducts/>
            <FeatureBanner/>
        </div>
    );
}

export default FruitShopCategories;
