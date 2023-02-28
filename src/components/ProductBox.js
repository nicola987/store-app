import React from "react";
import {
  ProductBoxWrapper,
  Quantity,
  TitleProductHead,
  WrapperTitle,
  Total,
  Price,
} from "./ProductBox.styled";
import Item from "./Item";

function ProductBox() {
  return (
    <ProductBoxWrapper>
      <WrapperTitle>
        <TitleProductHead>Product</TitleProductHead>
        <Price>Cena</Price>
        <Quantity>Ilość</Quantity>
        <Total>Razem</Total>
      </WrapperTitle>
      <Item />
      <Item />
    </ProductBoxWrapper>
  );
}

export default ProductBox;
