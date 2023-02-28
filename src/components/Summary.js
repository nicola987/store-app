import React from "react";
import {
  SummaryBox,
  ButtonSum,
  TitleTotalSum,
  ComeBack,
  TotalSum,
  AllValue,
  TotalPriceSummary,
  SummaryPrice,
  HeadTitleSummary,
  TitleValue,
} from "./Summary.styled";

function Summary() {
  return (
    <SummaryBox>
      <TitleTotalSum>
        <HeadTitleSummary>Podsumowanie</HeadTitleSummary>
        <AllValue>
          <TitleValue>Wartość koszyka</TitleValue>
          <SummaryPrice>247,98 zł</SummaryPrice>
        </AllValue>
      </TitleTotalSum>
      <TotalSum>
        SUMA
        <TotalPriceSummary>247,98zł</TotalPriceSummary>
      </TotalSum>
      <ButtonSum>Przejdź do kasy</ButtonSum>
      <ComeBack>WRÓĆ DO ZAKUPÓW</ComeBack>
    </SummaryBox>
  );
}
export default Summary;
