import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import "./style.css";
import HomePage from "./components/pages/homePage";
function App() {

  return (
    <BrowserRouter>
      <div className="">
        <Header />
      </div>
      <HomePage />
    </BrowserRouter>

  )
}

export default App
