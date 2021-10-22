import React , {useEffect, useState} from 'react';
import styled from 'styled-components';
import { getOrders, deleteSpecificOrder } from '../api/order';
import { OrderCard } from './order/OrderCard';

const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "OrderForm OrderForm OrderForm";

`;
export const Dashboard = ({}) => {
  const [orders, setOrders] = useState(null);
  const [alert, setAlert] = useState(null);
  useEffect(() => {
    async function fetchOrders() {
      let response = await getOrders();
      setOrders(response);
    }
    fetchOrders();
  },[]);

  const deleteOrder = async (id) => {
    await deleteSpecificOrder(id);
    async function fetchOrders() {
      let response = await getOrders();
      setOrders(response);
    }
    await fetchOrders();

  };
  
  return(

    <div>
    <Title>Current Orders</Title>
    <h1>{alert && <p>alert</p>}</h1>
      <Grid>
        {orders && orders.map((order, i) => <OrderCard key={i} order={order} deleteOrder={deleteOrder}/>)}
      </Grid>
    </div>
  );
}