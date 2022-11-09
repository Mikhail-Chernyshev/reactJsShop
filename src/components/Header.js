import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Order from './Order';

const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach((el) => (sum += Number.parseFloat(el.price)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='sum'>Sum: {new Intl.NumberFormat().format(sum)}$</p>
    </div>
  );
};
const showNotning = () => {
  return (
    <div className='empty'>
      <h2>Empty Cart</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div>
        <span className='logo'>House Flowers</span>
        <ul className='nav'>
          <li>About us</li>
          <li>Contacts</li>
          <li>Account</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && 'active'}`}
        />
        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ? showOrders(props) : showNotning()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  );
}
