import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import PaymentMethods from '../../components/PaymentMethods/PaymentMethods';
import './Checkout.scss';

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Billing Info
    sameAsShipping: true,
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingPincode: ''
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleStepChange = (step) => {
    if (step <= currentStep + 1) {
      setCurrentStep(step);
    }
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && 
               formData.phone && formData.address && formData.city && 
               formData.state && formData.pincode;
      case 2:
        return true; // Payment validation handled by PaymentMethods component
      default:
        return false;
    }
  };

  const handleOrderComplete = () => {
    // In a real app, this would process the payment and create the order
    alert('Order placed successfully! Thank you for choosing eco-friendly furniture.');
    clearCart();
    setCurrentStep(3);
  };

  if (cart.items.length === 0 && currentStep !== 3) {
    return (
      <div className="checkout-page empty-checkout">
        <div className="container">
          <div className="empty-content">
            <h2>Your cart is empty</h2>
            <p>Add some items to your cart before checking out.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="checkout-header">
          <h1>Checkout</h1>
          <div className="checkout-steps">
            <div className={`step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
              <div className="step-number">1</div>
              <span>Shipping</span>
            </div>
            <div className={`step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
              <div className="step-number">2</div>
              <span>Payment</span>
            </div>
            <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <span>Complete</span>
            </div>
          </div>
        </div>

        <div className="checkout-layout">
          <div className="checkout-form">
            {currentStep === 1 && (
              <div className="form-step">
                <h2>Shipping Information</h2>
                <form className="shipping-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">Address *</label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="3"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="city">City *</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="state">State *</label>
                      <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select State</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="pincode">Pincode *</label>
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        pattern="[0-9]{6}"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-actions">
                    <button
                      type="button"
                      className="btn btn-primary btn-large"
                      onClick={() => handleStepChange(2)}
                      disabled={!validateStep(1)}
                    >
                      Continue to Payment
                    </button>
                  </div>
                </form>
              </div>
            )}

            {currentStep === 2 && (
              <div className="form-step">
                <h2>Payment Method</h2>
                <PaymentMethods 
                  total={getTotalPrice() * 1.18}
                  onPaymentComplete={handleOrderComplete}
                />
                <div className="form-actions">
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => handleStepChange(1)}
                  >
                    Back to Shipping
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="order-complete">
                <div className="success-icon">✅</div>
                <h2>Order Placed Successfully!</h2>
                <p>Thank you for choosing eco-friendly furniture. Your order will be processed shortly.</p>
                <div className="order-details">
                  <h3>What's Next?</h3>
                  <ul>
                    <li>📧 You'll receive a confirmation email shortly</li>
                    <li>📦 We'll start processing your order within 24 hours</li>
                    <li>🚚 Free delivery within 7-10 business days</li>
                    <li>🌱 You're contributing to a greener planet!</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {currentStep < 3 && (
            <div className="order-summary">
              <div className="summary-card">
                <h3>Order Summary</h3>
                
                <div className="order-items">
                  {cart.items.map((item) => (
                    <div key={item.id} className="order-item">
                      <img src={item.image} alt={item.name} />
                      <div className="item-info">
                        <h4>{item.name}</h4>
                        <p>Qty: {item.quantity}</p>
                        {item.selectedColor && <p>Color: {item.selectedColor}</p>}
                      </div>
                      <div className="item-total">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="summary-calculations">
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
                </div>

                <div className="eco-impact">
                  <h4>🌱 Your Eco Impact</h4>
                  <p>This order saves approximately:</p>
                  <ul>
                    <li>🌳 2.5 kg of wood waste</li>
                    <li>💧 150 liters of water</li>
                    <li>⚡ 5 kWh of energy</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;