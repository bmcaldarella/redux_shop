import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import './cart.css'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart); 
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h1>Products</h1>
      {cartItems.length === 0 ? (
        <p>Empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.name} className="cart-item">
              <div>
                <img className="img-cart" src={item.img} alt={item.name}  />
                <strong>{item.name}</strong> (x{item.quantity}) - ${item.price.toFixed(2)} c/u
              </div>
              <Button 
                variant="danger" 
                size="sm" 
                onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.name })}
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
