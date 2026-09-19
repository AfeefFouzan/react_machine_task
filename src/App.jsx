import { Routes, Route } from "react-router-dom";
import { Product, ProductDetails } from "./products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;