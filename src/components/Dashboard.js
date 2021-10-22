import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Simplert from 'react-simplert'
import {deleteSpecificOrder, getOrders} from '../api/order';
import {OrderCard} from './order/OrderCard';

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
export const Dashboard = () => {
    const [orders, setOrders] = useState(null);
    const [alert, setAlert] = useState({
        title: 'Order Was Deleted',
        message: 'The order with id  was cancelled.',
        type: 'success',
        show: false
    });

    useEffect(() => {
        async function fetchOrders() {
            let response = await getOrders();
            setOrders(response);
        }

        fetchOrders();
    }, []);

    const deleteOrder = async (id) => {
        await deleteSpecificOrder(id);

        async function fetchOrders() {
            let response = await getOrders();
            setOrders(response);
        }

        await fetchOrders();

        setAlert({
            title: 'Order Was Deleted',
            message: 'The order with id ' + id + ' was cancelled.',
            type: 'success',
            show: true
        })
    };

    return (

        <div>
            <Title>Current Orders</Title>
            <Simplert
                showSimplert={alert.show}
                type={alert.type}
                title={alert.title}
                message={alert.message}
            />
            <Grid>
                {orders && orders.map((order, i) => <OrderCard key={i} order={order} deleteOrder={deleteOrder}/>)}
            </Grid>
        </div>
    );
}