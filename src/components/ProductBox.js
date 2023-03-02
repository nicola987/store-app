import React, { useState } from "react";
import {
  ProductBoxWrapper,
  Quantity,
  TitleProductHead,
  WrapperTitle,
  Total,
  Price,
} from "./ProductBox.styled";
import Item from "./Item";
import img from "../assets/img.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
const defaultList = [
  {
    id: 1,
    img: img,
    count: 2,
    title: "Glam Shop",
    desc: "Paleta cieni Czekoladowa Wiśnia",
    price: "180,99zł",
    totalPrice: "180,99zł",
  },
  {
    id: 2,
    img: img1,
    count: 1,
    title: "Victor Wayne ",
    desc: "Paleta cieni do powiek NUDE",
    price: "267,99zł",
    totalPrice: "267,99zł",
  },
  {
    id: 3,
    img: img2,
    count: 1,
    title: "BasicLab",
    desc: "Emulsyjne serum z 1% czystego retinolu, 5% witaminą C, koenzymem Q10 ",
    price: "191,99zł",
    totalPrice: "191,99zł",
  },
  {
    id: 4,
    img: img3,
    title: "Holika Holika",
    count: 3,
    desc: "Żel przeciwsłoneczny z aloesem i z wysokim filtrem SPF50PA++++",
    price: "84,99 zł",
    totalPrice: "84,99 zł",
  },
];

function ProductBox() {
  const [list, setList] = useState(defaultList);

  const handleDeleteProduct = (id) => {
    const newList = list.filter((el) => el.id !== id);
    setList(newList);
  };

  return (
    <ProductBoxWrapper>
      <WrapperTitle>
        <TitleProductHead>Product</TitleProductHead>
        <Price>Cena</Price>
        <Quantity>Ilość</Quantity>
        <Total>Razem</Total>
      </WrapperTitle>

      {list.map((el) => (
        <Item {...el} handleDeleteProduct={handleDeleteProduct} />
      ))}
    </ProductBoxWrapper>
  );
}

export default ProductBox;
