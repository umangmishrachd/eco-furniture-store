import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { mockProducts } from '../../utils/mockData';
import './FeaturedProducts.scss';

const FeaturedProducts = () => {
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <section className="featured-products section bg-light">
      <div className="container">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Discover our most popular eco-friendly furniture pieces, loved by customers across India.</p>
        </div>

        <div className="products-grid">
          {featuredProducts.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="featured-actions">
          <Link to="/products" className="btn btn-primary btn-large">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;