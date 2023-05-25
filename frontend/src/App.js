import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNav from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import AddProduct from "./pages/addProduct/addProduct";
import "./autoload";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <AppNav />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/create" element={<AddProduct />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
