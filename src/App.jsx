import React, { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/catalog.json")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="catalog-apple-bg">
      <header className="catalog-hero">
        <h1 className="catalog-title">Peptides</h1>
        <p className="catalog-tagline">
          Explore the future of health and science.<br />
          Discover our curated peptide collection.
        </p>
        <a href="#products" className="catalog-cta-btn">Browse Catalog</a>
      </header>
      <section id="products" className="catalog-products">
        {products.map((product) => (
          <div key={product.id} className="catalog-card">
            <div className="catalog-card-name">{product.name}</div>
            <div className="catalog-card-price">${product.price.toFixed(2)}</div>
          </div>
        ))}
      </section>
      <footer className="catalog-footer">
        <p>© {new Date().getFullYear()} Peptides Catalog</p>
      </footer>
    </div>
  );
}

export default App;