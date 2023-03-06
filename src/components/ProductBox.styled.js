import styled from "styled-components";

export const ProductBoxWrapper = styled.div`
  width: 700px;
  height: auto;
`;

export const WrapperTitle = styled.div`
  background-color: #f2f3f4;
  padding: 4px 8px;
  border-radius: 6px;
  display: grid;
  grid-template-columns: 1fr 100px 100px 100px;
`;

export const WrapperItem = styled.div`
  padding: 4px 8px;
  display: grid;
  grid-template-columns: 1fr 100px 100px 100px;
  font-family: "Poppins", sans-serif;
`;
export const TitleProductHead = styled.div`
  font-weight: 600;
  font-size: 14px;
  padding: 4px;
  "Poppins","Helvetica Neue",Helvetica,Arial,sans-serif;
`;
export const TitleProduct = styled.div`
  padding: 4px;
  font-size: 14px;
  font-family: "Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const Price = styled.div`
  text-align: center;
  padding: 4px;
  font-size: 14px;
  font-family: "Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 600;
`;
export const Quantity = styled.div`
  text-align: center;
  padding: 4px;
  font-size: 14px;
  font-family: "Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 600;
`;

export const Total = styled.div`
  text-align: center;
  padding: 4px;
  font-size: 14px;
  font-family: "Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 600;
  display: flex;
  gap: 15px;
`;

// BUTTONS MINUS & PLUS

export const ButtonMinus = styled.button`
  border: #d0d8da;
  align-items: center;
  background-color: #fff;
  height: 26px;
  width: 26px;
  min-width: 26px;
  border: 1px solid #d0d8da;
  border-radius: 5px;
  cursor: pointer;
`;

export const ButtonPlus = styled.button`
  height: 26px;
  width: 26px;
  min-width: 26px;
  font-weight: 600;
  border: 1px solid #d0d8da;
  border-radius: 5px;
  background-color: #fff;
  align-items: center;
  cursor: pointer;
`;

export const WrapperButton = styled.div`
  display: flex;
  gap: 10px;
`;

export const Trash = styled.div`
  width: 18px;
  height: 18px;
  color: #71797b;
  align-items: center;
  cursor: pointer;
`;

// IMG
export const ImgProduct = styled.img`
  width: 100px;
  height: auto;
`;

export const WrapperImgTitle = styled.div`
  display: flex;
`;

export const ButtonAddNewProduct = styled.button`
  font-size: 14px;
  background: #2694ac;
  border: unset;
  color: #fff;
  border-radius: 20px;
  padding: 8px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 600;
`;
