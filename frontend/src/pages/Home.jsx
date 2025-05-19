import { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
import.meta.env.VITE_API_URL;
export default function Home() {
  const [products,setProducts] = useState([]);
  const [searchParams,setSearchParams] = useSearchParams();
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/products?${searchParams}`)
    .then(res=>res.json())
    .then(res=>setProducts(res.products))
  },[searchParams]);
  return (
    <Fragment>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <div className="row">
          {products.map((products)=>  <ProductCard product={products} key={products._id} /> )}
        </div>
      </section>
    </Fragment>
  );
}
