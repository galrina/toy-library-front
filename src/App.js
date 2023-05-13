import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
//Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Register from "./components/Register";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
           <Route path="/register" element={<Register />} />
           <Route path="/product-list" element={[<ProductList />]} />
           <Route path="/cart" element={[<Cart />]} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
