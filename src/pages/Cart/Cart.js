import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Cart.scss';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (cart.items.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <div className="container">
          <div className="empty-cart-content">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Discover our eco-friendly furniture collection and add some items to your cart.</p>
            <Link to="/products" className="btn btn-primary btn-large">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <button 
            className="btn btn-outline btn-small clear-cart"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>

        <div className="cart-layout">
          <div className="cart-items">
            {cart.items.map((item) => (
              <div key={`${item.id}-${item.selectedColor || 'default'}`} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-category">{item.category}</p>
                  {item.selectedColor && (
                    <p className="item-color">Color: {item.selectedColor}</p>
                  )}
                  <div className="item-features">
                    {item.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="item-quantity">
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  >
                    -
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <div className="item-price">
                  <span className="unit-price">{formatPrice(item.price)} each</span>
                  <span className="total-price">{formatPrice(item.price * item.quantity)}</span>
                </div>

                <button 
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              
              <div className="summary-line">
                <span>Subtotal:</span>
                <span>{formatPrice(getTotalPrice())}</span>
              </div>
              
              <div className="summary-line">
                <span>Shipping:</span>
                <span className="free">Free</span>
              </div>
              
              <div className="summary-line">
                <span>Tax (GST):</span>
                <span>{formatPrice(getTotalPrice() * 0.18)}</span>
              </div>
              
              <div className="summary-line total">
                <span>Total:</span>
                <span>{formatPrice(getTotalPrice() * 1.18)}</span>
              </div>

              <Link to="/checkout" className="btn btn-primary btn-large checkout-btn">
                Proceed to Checkout
              </Link>

              <Link to="/products" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>

            <div className="eco-benefits">
              <h4>🌱 Your Eco Impact</h4>
              <p>By choosing our eco-friendly furniture, you're contributing to:</p>
              <ul>
                <li>🌳 Sustainable forestry practices</li>
                <li>♻️ Reduced waste generation</li>
                <li>🇮🇳 Supporting local communities</li>
                <li>🌍 Lower carbon footprint</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;