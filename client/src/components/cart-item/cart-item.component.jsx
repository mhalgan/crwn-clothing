import React from "react";
import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  ItemName
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <ItemName>{name}</ItemName>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

// Only re-render when new types of items are added to the cart
export default React.memo(CartItem);
