import styled from "styled-components";

export const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "OrderForm OrderForm OrderForm";

`;

export const PageContainer = styled.div`
  margin: 20px;
`;

export const LoadingContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 20px;
`;
export const SearchInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px 15px;
  margin-bottom: 40px;
  font-size: 14px;
`;

export const SearchContainer = styled.div`
`;