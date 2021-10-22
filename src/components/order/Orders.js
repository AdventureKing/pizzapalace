import React, {useState} from 'react';
import Simplert from 'react-simplert'
import {OrderForm} from './OrderForm';
import {AddButton, Grid, PageContainer, RemoveButton, Title} from './OrderPageStyles'

export const Orders = () => {
    const [orders, setOrders] = useState(1);
    const [alert, setAlert] = useState({title: '', message: '', type: 'success', show: false});
    const addOrder = () => {

        return setOrders(orders + 1);
    }
    const removeOrder = () => {
        return orders === 1 ? '' : setOrders(orders - 1);
    };

    return (
        <PageContainer>
            <Title>Place a order
                <AddButton onClick={addOrder}>Add Order</AddButton> <RemoveButton
                    onClick={removeOrder}> Remove Order</RemoveButton>
                <Simplert
                    showSimplert={alert.show}
                    type={alert.type}
                    title={alert.title}
                    message={alert.message}
                    onClose={() => setAlert({title: '', message: '', type: 'success', show: false})}
                />
            </Title>
            <Grid>
                {[...Array(orders)].map((_, i) => <OrderForm key={i} setAlert={setAlert}/>)}
            </Grid>
        </PageContainer>
    );
}