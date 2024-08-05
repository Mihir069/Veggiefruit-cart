import Cart from "../../components/cart";
import CartHeader from "../../components/common/cart-header";
import Footer from "../../components/footer";
import Header from "../../components/header";

const CartPage = () =>{
    return(
        <>
        <Header/>
        <CartHeader/>
        <Cart/>
        <Footer/>
        </>   
    )
}
export default CartPage;