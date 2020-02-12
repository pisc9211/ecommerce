import React from 'react';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden }  from '../../redux/cart/cart.actions';

import { CartDropdownContainer, CartItems, EmptyMessage, CartDropdownButton } from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => (
  <CartDropdownContainer>
    <CartItems>
      {
        cartItems.length 
        ? (cartItems.map(item => <CartItem key={item.id} item={item} />))
        : (<EmptyMessage>Your cart is empty</EmptyMessage>)
      }
    </CartItems>
    <CartDropdownButton 
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden())
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))