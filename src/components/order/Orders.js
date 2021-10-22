import React, {useState} from 'react';
import Simplert from 'react-simplert'
import {OrderForm} from './OrderForm';
import {AddButton, Grid, RemoveButton, Title} from './OrderPageStyles'

export const Orders = ({logout}) => {
    const [orders, setOrders] = useState(1);
    const [alert, setAlert] = useState({title: '', message: '', type: 'success', show: false});

    const removeOrder = () => {
        return orders.size !== 1 ? setOrders(orders + 1) : '';
    };

    return (
        <div>
            <Title>Place a order
                <AddButton onClick={() => setOrders(orders + 1)}>Add Order</AddButton> <RemoveButton
                    onClick={() => removeOrder()}> Remove Order</RemoveButton>
                <Simplert
                    showSimplert={alert.show}
                    type={alert.type}
                    title={alert.title}
                    message={alert.message}
                />
            </Title>
            <Grid>
                {[...Array(orders)].map((_, i) => <OrderForm key={i} setAlert={setAlert}/>)}
            </Grid>
        </div>
    );
}