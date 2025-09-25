import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { mockProducts } from '../../utils/mockData';
import './ProductDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    const foundProduct = mockProducts.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.colors[0]);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart({ ...product, selectedColor });
      }
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const calculateDiscount = () => {
    if (product && product.originalPrice) {
      return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    }
    return 0;
  };

  if (!product) {
    return (
      <div className="product-detail loading-state">
        <div className="container">
          <div className="loading">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-detail-content">
          <div className="product-images">
            <div className="main-image">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
              />
              {!product.inStock && (
                <div className="out-of-stock-overlay">Out of Stock</div>
              )}
              {calculateDiscount() > 0 && (
                <div className="discount-badge">-{calculateDiscount()}%</div>
              )}
            </div>
            <div className="image-thumbnails">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="product-info">
            <div className="product-header">
              <div className="product-category">{product.category}</div>
              <h1 className="product-title">{product.name}</h1>
              
              <div className="product-rating">
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <span 
                      key={index}
                      className={`star ${index < Math.floor(product.rating) ? 'filled' : ''}`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
                <span className="rating-text">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="product-pricing">
                <span className="current-price">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="original-price">{formatPrice(product.originalPrice)}</span>
                )}
                {calculateDiscount() > 0 && (
                  <span className="discount-text">Save {calculateDiscount()}%</span>
                )}
              </div>
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="product-features">
              <h3>Key Features</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="product-options">
              {product.colors && product.colors.length > 0 && (
                <div className="color-options">
                  <h4>Color</h4>
                  <div className="color-selector">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        className={`color-option ${selectedColor === color ? 'active' : ''}`}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="quantity-selector">
                <h4>Quantity</h4>
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="quantity-display">{quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="product-actions">
              <button 
                className="btn btn-primary btn-large add-to-cart"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <button className="btn btn-outline btn-large wishlist">
                Add to Wishlist ❤️
              </button>
            </div>

            <div className="product-specifications">
              <h3>Specifications</h3>
              <div className="spec-grid">
                <div className="spec-item">
                  <span className="spec-label">Dimensions:</span>
                  <span className="spec-value">{product.dimensions}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Material:</span>
                  <span className="spec-value">Eco-friendly sustainable materials</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Manufacturing:</span>
                  <span className="spec-value">Made in India</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Warranty:</span>
                  <span className="spec-value">2 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;