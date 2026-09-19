import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="Search product"
        onChange={(e) => setSearch(e.target.value)}
      />

      <h1>PRODUCTS</h1>

      {filteredProducts.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            <h2>{product.title}</h2>
          </Link>

          <p>Price: ${product.price}</p>
          <p>Rating: ⭐ {product.rating}</p>
          <img src={product.thumbnail} width="150" />
        </div>
      ))}
    </div>
  );
}

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      });
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Link to="/">← Back to Products</Link>

      <h1>{product.title}</h1>

      <img src={product.thumbnail} width="250" />

      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: ⭐ {product.rating}</p>
      <p>Stock: {product.stock}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Warranty: {product.warrantyInformation}</p>
      <p>Shipping: {product.shippingInformation}</p>
      <p>Availability: {product.availabilityStatus}</p>
    </div>
  );
}

export { Product, ProductDetails };