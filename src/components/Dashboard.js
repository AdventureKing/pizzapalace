import React, {useEffect, useState} from 'react';
import Simplert from 'react-simplert'
import {deleteSpecificOrder, getOrders} from '../api/order';
import {OrderCard} from './order/OrderCard';
import {BallTriangle} from "react-loading-icons";
import {LoadingContainer, PageContainer, Title, Grid, SearchContainer, SearchInput} from './DashboardStyles'

export const Dashboard = () => {
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState("");
    const [alert, setAlert] = useState({
        title: 'Order Was Deleted',
        message: 'The order with id  was cancelled.',
        type: 'success',
        show: false
    });



    const handleChange = value => {
        setSearchText(value);
        filterData(value);
    };

    // filter records by search text
    const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") setFilteredData(orders);
        else {
            const filteredData = orders.filter(item => {
                return Object.keys(item).some(key =>
                    item[key].toString().toLowerCase().includes(lowercasedValue)
                );
            });
            setFilteredData(filteredData);
        }
    }



    useEffect( async () => {

        async function fetchOrders() {
            let response = await getOrders();
            setOrders(response);
            setFilteredData(response);
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
               <SearchInput
                style={{ marginLeft: 5 }}
                type="text"
                placeholder="Type to search..."
                value={searchText}
                onChange={e => handleChange(e.target.value)}
            />
            <Simplert
                showSimplert={alert.show}
                type={alert.type}
                title={alert.title}
                message={alert.message}
                onClose={() => setAlert({title: '', message: '', type: 'success', show: false})}

            />
            <Grid>
                {filteredData && filteredData.map((order, i) => <OrderCard key={i} order={order} deleteOrder={deleteOrder}/>)}
            </Grid>
        </PageContainer>
    );
}