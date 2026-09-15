import axios from "axios";
import { useEffect, useState } from "react";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      });
  }, []);

  return (
    <div>
      <h1>PRODUCTS</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <img src={product.thumbnail} width="150" />
        </div>
      ))}
    </div>
  );
}

export default Product;