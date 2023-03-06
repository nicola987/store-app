import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperModal = styled.div`
  border: none;
  border-radius: 8px;
  width: 800px;
  height: auto;
  background-color: white;
  padding: 10px;
`;

export const WrapperClose = styled.div`
  display: flex;
`;

export const ButtonClose = styled.button`
  border: unset;
  color: black;
  padding: 8px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  margin-left: auto;
  background-color: transparent;
`;

export const H2 = styled.h2`
  border: 1px solid;
  text-align: center;
  color: #fff;
  background: #2694ac;
  padding: 8px;
  font-family: "Poppins", sans-serif;
`;

export const Input = styled.input`
  border: 1px solid #2694ac;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
  width: 300px;
  margin-left: 150px;
  height: 20px;
`;

export const ButtonInput = styled.button`
  background: #2694ac;
  border: unset;
  color: #fff;
  border-radius: 20px;
  padding: 8px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 600;
  margin-left: 15px;
`;

export const ExampleProduct = styled.div`
  display: flex;
  width: 400px;
  height: auto;
  aligni-items: center;
  border: 1px solid;
  margin-bottom: 10px;
  column-gap: 20px;
  margin-left: 100px;
  border: 1px solid #2694ac;
`;

export const PicProduct = styled.div`
  font-family: "Poppins", sans-serif;
`;

export const NameProduct = styled.div`
  font-family: "Poppins", sans-serif;
`;

export const DescProd = styled.div`
  font-family: "Poppins", sans-serif;
`;

export const WrapperButtonAddProduct = styled.div`
  display: flex;
`;

export const ButtonAddProduct = styled.button`
  background: #2694ac;
  border: unset;
  color: #fff;
  border-radius: 20px;
  padding: 8px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 600;
  margin-left: auto;
`;
