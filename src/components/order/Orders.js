import React, {useState} from 'react';
import { OrderForm } from './OrderForm';
import styled from 'styled-components';

const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;
const AddButton = styled.button`
  margin: 5px;
  box-shadow:inset 0px -3px 7px 0px #29bbff;
	background:linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
	background-color:#2dabf9;
	border-radius:3px;
	border:1px solid #0b0e07;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	padding:9px 23px;
	text-decoration:none;
	text-shadow:0px 1px 0px #263666;

  :hover {
    background:linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
    background-color:#0688fa;
  } 
  :active {
    position:relative;
    top:1px;
  }
`;

const RemoveButton = styled.button`
  margin: 5px;
  box-shadow:inset 0px -3px 7px 0px #29bbff;
	background:linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
	background-color:#2dabf9;
	border-radius:3px;
	border:1px solid #0b0e07;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	padding:9px 23px;
	text-decoration:none;
	text-shadow:0px 1px 0px #263666;

  :hover {
    background:linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
    background-color:#0688fa;
  } 
  :active {
    position:relative;
    top:1px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "OrderForm OrderForm OrderForm";

`;
export const Orders = () => {
  const [orders, setOrders] = useState(1);
  
  return(
    <div>
    <Title>Place a order
    <AddButton onClick ={() => setOrders(orders + 1)}>Add Order</AddButton> <RemoveButton onClick ={() => setOrders(orders - 1)}> Remove Order</RemoveButton>
    </Title>
      <Grid>
        {[...Array(orders)].map((_, i) => <OrderForm key={i}/>)}
      </Grid>
    </div>
  );
}