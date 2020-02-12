import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import { CheckoutItemContainer, ImageContainer, RemoveButton, ItemDescription, QuantityDescription} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <ItemDescription>{name}</ItemDescription>
      <QuantityDescription>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityDescription>
      <ItemDescription>{price}</ItemDescription>
      <RemoveButton onClick={() => clearItemFromCart(cartItem)} >&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem);