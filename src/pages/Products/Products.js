import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { mockProducts } from '../../utils/mockData';
import './Products.scss';

const Products = () => {
  const [products, setProducts] = useState(mockProducts);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    inStock: false,
    sortBy: 'name'
  });

  const categories = [...new Set(mockProducts.map(p => p.category))];
  
  const applyFilters = () => {
    let filtered = [...mockProducts];

    if (filters.category) {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    if (filters.inStock) {
      filtered = filtered.filter(p => p.inStock);
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setProducts(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      priceRange: '',
      inStock: false,
      sortBy: 'name'
    });
  };

  return (
    <div className="products-page">
      <div className="container">
        <div className="page-header">
          <h1>Our Products</h1>
          <p>Discover our complete collection of eco-friendly, sustainable furniture made in India.</p>
        </div>

        <div className="products-layout">
          <aside className="filters-sidebar">
            <div className="filters-header">
              <h3>Filters</h3>
              <button 
                className="btn btn-small btn-outline"
                onClick={clearFilters}
              >
                Clear All
              </button>
            </div>

            <div className="filter-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="priceRange">Price Range</label>
              <select
                id="priceRange"
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              >
                <option value="">All Prices</option>
                <option value="0-20000">Under ₹20,000</option>
                <option value="20000-40000">₹20,000 - ₹40,000</option>
                <option value="40000-60000">₹40,000 - ₹60,000</option>
                <option value="60000-999999">Above ₹60,000</option>
              </select>
            </div>

            <div className="filter-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                />
                <span className="checkmark"></span>
                In Stock Only
              </label>
            </div>

            <div className="filter-group">
              <label htmlFor="sortBy">Sort By</label>
              <select
                id="sortBy"
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              >
                <option value="name">Name A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </aside>

          <main className="products-content">
            <div className="products-header">
              <div className="results-info">
                <span>{products.length} products found</span>
              </div>
            </div>

            <div className="products-grid">
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {products.length === 0 && (
              <div className="no-products">
                <div className="no-products-icon">📦</div>
                <h3>No products found</h3>
                <p>Try adjusting your filters to see more products.</p>
                <button 
                  className="btn btn-primary"
                  onClick={clearFilters}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;