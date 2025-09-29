import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentMethods.scss';

// Initialize Stripe (replace with your publishable key)
const stripePromise = loadStripe('pk_test_your_stripe_publishable_key_here');

const PaymentForm = ({ total, onPaymentComplete }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      // In a real app, you would send paymentMethod.id to your server
      console.log('PaymentMethod:', paymentMethod);
      
      // Simulate payment processing
      setTimeout(() => {
        setProcessing(false);
        onPaymentComplete();
      }, 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="stripe-form">
      <div className="card-element-container">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
            },
          }}
        />
      </div>
      {error && <div className="payment-error">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || processing}
        className="btn btn-primary btn-large payment-submit"
      >
        {processing ? (
          <>
            <span className="loading"></span>
            Processing...
          </>
        ) : (
          `Pay ₹${total.toLocaleString()}`
        )}
      </button>
    </form>
  );
};

const PaymentMethods = ({ total, onPaymentComplete }) => {
  const [selectedMethod, setSelectedMethod] = useState('card');

  const handleGooglePay = () => {
    // Implement Google Pay
    if (window.google && window.google.payments) {
      // Google Pay implementation
      alert('Google Pay integration would be implemented here');
    } else {
      alert('Google Pay is not available');
    }
  };

  const handleUPI = () => {
    // Simulate UPI payment
    alert('UPI payment would be processed here');
    onPaymentComplete();
  };

  return (
    <div className="payment-methods">
      <div className="payment-options">
        <div 
          className={`payment-option ${selectedMethod === 'card' ? 'selected' : ''}`}
          onClick={() => setSelectedMethod('card')}
        >
          <input
            type="radio"
            name="payment"
            value="card"
            checked={selectedMethod === 'card'}
            onChange={() => setSelectedMethod('card')}
          />
          <span className="payment-icon">💳</span>
          <span>Credit/Debit Card</span>
        </div>

        <div 
          className={`payment-option ${selectedMethod === 'google-pay' ? 'selected' : ''}`}
          onClick={() => setSelectedMethod('google-pay')}
        >
          <input
            type="radio"
            name="payment"
            value="google-pay"
            checked={selectedMethod === 'google-pay'}
            onChange={() => setSelectedMethod('google-pay')}
          />
          <span className="payment-icon">🟡</span>
          <span>Google Pay</span>
        </div>

        <div 
          className={`payment-option ${selectedMethod === 'upi' ? 'selected' : ''}`}
          onClick={() => setSelectedMethod('upi')}
        >
          <input
            type="radio"
            name="payment"
            value="upi"
            checked={selectedMethod === 'upi'}
            onChange={() => setSelectedMethod('upi')}
          />
          <span className="payment-icon">📱</span>
          <span>UPI</span>
        </div>
      </div>

      <div className="payment-form">
        {selectedMethod === 'card' && (
          <Elements stripe={stripePromise}>
            <PaymentForm total={total} onPaymentComplete={onPaymentComplete} />
          </Elements>
        )}

        {selectedMethod === 'google-pay' && (
          <div className="google-pay-container">
            <button
              className="btn btn-primary btn-large google-pay-btn"
              onClick={handleGooglePay}
            >
              <span className="payment-icon">🟡</span>
              Pay with Google Pay
            </button>
          </div>
        )}

        {selectedMethod === 'upi' && (
          <div className="upi-container">
            <div className="form-group">
              <label htmlFor="upiId">UPI ID</label>
              <input
                type="text"
                id="upiId"
                placeholder="example@upi"
                className="upi-input"
              />
            </div>
            <button
              className="btn btn-primary btn-large upi-pay-btn"
              onClick={handleUPI}
            >
              Pay with UPI
            </button>
          </div>
        )}
      </div>

      <div className="payment-security">
        <div className="security-badges">
          <span className="security-badge">🔒 SSL Secured</span>
          <span className="security-badge">✅ PCI Compliant</span>
          <span className="security-badge">🛡️ 256-bit Encryption</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;