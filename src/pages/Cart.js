import React, { startTransition } from 'react';
import './Cart.css';
import { useSelector,useDispatch } from 'react-redux';
import { remove } from  '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector(state => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
          products.map(product =>(
            <div key={product.id} className='cartCard'>
              <img src={product.image} alt='' />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className='btn' onClick = {() => handleRemove(product.id)}>remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart