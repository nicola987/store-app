import React, { useState } from "react";
import {
  ProductBoxWrapper,
  Quantity,
  TitleProductHead,
  WrapperTitle,
  Total,
  Price,
  ButtonAddNewProduct,
} from "./ProductBox.styled";
import Item from "./Item";
import img from "../assets/img.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import Modal from "./ModalCard/Modal";

const defaultList = [
  {
    id: 1,
    img: img,
    count: 2,
    title: "Glam Shop",
    desc: "Paleta cieni Czekoladowa Wiśnia",
    price: 180.99,
  },
  {
    id: 2,
    img: img1,
    count: 1,
    title: "Victor Wayne ",
    desc: "Paleta cieni do powiek NUDE",
    price: 333.99,
  },
  {
    id: 3,
    img: img2,
    count: 1,
    title: "BasicLab",
    desc: "Emulsyjne serum z 1% czystego retinolu, 5% witaminą C, koenzymem Q10 ",
    price: 12.99,
  },
  {
    id: 4,
    img: img3,
    title: "Holika Holika",
    count: 3,
    desc: "Żel przeciwsłoneczny z aloesem i z wysokim filtrem SPF50PA++++",
    price: 83,
  },
];

function ProductBox() {
  const [list, setList] = useState(defaultList);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleDeleteProduct = (id) => {
    const newList = list.filter((el) => el.id !== id);
    setList(newList);
  };
  const handleShowModal = () => setIsOpenModal(true);
  const handleHideModal = () => setIsOpenModal(false);
  return (
    <>
      <ProductBoxWrapper>
        <ButtonAddNewProduct onClick={handleShowModal}>
          Dodaj produkt
        </ButtonAddNewProduct>
        <WrapperTitle>
          <TitleProductHead>Produkt</TitleProductHead>
          <Price>Cena</Price>
          <Quantity>Ilość</Quantity>
          <Total>Razem</Total>
        </WrapperTitle>

        {list.map((el) => (
          <Item key={el.id} {...el} handleDeleteProduct={handleDeleteProduct} />
        ))}
      </ProductBoxWrapper>
      {isOpenModal && <Modal onRequestClose={handleHideModal} />}
    </>
  );
}

export default ProductBox;
