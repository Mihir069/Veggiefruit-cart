import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./pages/homePage";
import "./style.css";
import { Provider } from "react-redux";
import store from "./store";
function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="">
          <Header />
        </div>
        <HomePage />
      </BrowserRouter>
    </Provider>
  )
}

export default App
