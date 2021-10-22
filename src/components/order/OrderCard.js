import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Container, FormLabel, LoadingContainer, RemoveButton, Title} from './OrderFormStyles';
import {BallTriangle} from "react-loading-icons";


export const OrderCard = ({order, deleteOrder}) => {
    const [loading, setLoading] = useState(false);

    const handleClick = async (event) => {
        event.preventDefault();
        setLoading(true);
        await deleteOrder(order.Order_ID);
        setLoading(false);
    };

    if (loading) {
        return (
            <Container>
                <LoadingContainer>
                    <BallTriangle/>
                </LoadingContainer>
            </Container>
        );

    }


    return (
        <Container>
            <Title>Placed Order {order.Order_ID}</Title>
            <FormLabel>Crust: {order.Crust}</FormLabel>

            <FormLabel>Flavor: {order.Flavor}</FormLabel>

            <FormLabel>Size: {order.Size}</FormLabel>

            <FormLabel>Table Number: {order.Table_No}</FormLabel>

            <RemoveButton onClick={(event) => handleClick(event, order.Order_ID)}> Cancel Order</RemoveButton>
        </Container>
    );
}

OrderCard.propTypes = {
    deleteOrder: PropTypes.func.isRequired,
    order: PropTypes.shape({
        Crust: PropTypes.string,
        Flavor: PropTypes.string,
        Size: PropTypes.string,
        Table_No: PropTypes.number
    })
}
