import React, { useState } from "react";
import {
  WrapperModal,
  ButtonClose,
  H2,
  Input,
  ButtonAddProduct,
  Overlay,
  WrapperClose,
  WrapperButtonAddProduct,
} from "./Modal.styled";

function Modal({ onRequestClose }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <Overlay>
      <WrapperModal>
        <WrapperClose>
          <ButtonClose onClick={onRequestClose}>X</ButtonClose>
        </WrapperClose>
        <H2>Dodaj produkt do koszyka </H2>
        <Input value={inputValue} onChange={() => setInputValue()} />
        <WrapperButtonAddProduct>
          <ButtonAddProduct>Dodaj produkt</ButtonAddProduct>
        </WrapperButtonAddProduct>
      </WrapperModal>
    </Overlay>
  );
}

export default Modal;
