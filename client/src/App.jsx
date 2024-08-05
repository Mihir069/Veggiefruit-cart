import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/header";
import HomePage from "./pages/homePage";
import "./style.css";
import { Provider } from "react-redux";
import store from "./store";
import ShopPage from "./pages/shopPage";
import ShopDetailPage from "./pages/shopDetailPage";
import ContactPage from "./pages/contactPage";
import ErrorPage from "./pages/errorPage";
import CartPage from "./pages/cartPage";
function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/shop" element={<ShopPage />}/>
          <Route path="/shop-details" element={<ShopDetailPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/404" element={<ErrorPage/>}/>
        </Routes>
        
      </BrowserRouter>
    </Provider>
  )
}

export default App
