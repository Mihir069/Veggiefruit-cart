import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./pages/homePage";
import "./style.css";
import { Provider } from "react-redux";
import store from "./store";
import ShopPage from "./pages/shopPage";
function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/shop" element={<ShopPage />}/>
        </Routes>
        
      </BrowserRouter>
    </Provider>
  )
}

export default App
