import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Simplert from 'react-simplert'
import {deleteSpecificOrder, getOrders} from '../api/order';
import {OrderCard} from './order/OrderCard';
import {BallTriangle} from "react-loading-icons";
import {LoadingContainer, PageContainer, Title, Grid} from './DashboardStyles'

export const Dashboard = () => {
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState(null);
    const [alert, setAlert] = useState({
        title: 'Order Was Deleted',
        message: 'The order with id  was cancelled.',
        type: 'success',
        show: false
    });

    useEffect(async () => {

        async function fetchOrders() {
            let response = await getOrders();
            setOrders(response);
        }

        setLoading(true);

        await fetchOrders();
        setLoading(false);
    }, []);

    const deleteOrder = async (id) => {
        await deleteSpecificOrder(id);

        async function fetchOrders() {
            let response = await getOrders();
            setOrders(response);
        }

        setLoading(true);
        await fetchOrders();
        setLoading(false);
        setAlert({
            title: 'Order Was Deleted',
            message: 'The order with id ' + id + ' was cancelled.',
            type: 'success',
            show: true
        })
    };

    if (loading) {
        return (
            <PageContainer>
                <LoadingContainer>
                    <BallTriangle stroke="#06bcee"/>
                </LoadingContainer>
            </PageContainer>
        );

    }
    return (

        <PageContainer>
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
        </PageContainer>
    );
}