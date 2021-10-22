import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
   Container,
    FormLabel,
    Title,
} from './OrderFormStyles';

const RemoveButton = styled.button`
     
`;
export const OrderCard = ({order, deleteOrder}) => {

    const handleClick = (event) => {
        event.preventDefault();
        deleteOrder(order.Order_ID);
    };
    return(
      <div>
        <Container >
            <Title></Title>
            <FormLabel>Crust: {order.Crust}</FormLabel>
            
            <FormLabel>Flavor: {order.Flavor}</FormLabel>
           
            <FormLabel>Size: {order.Size}</FormLabel>
            
            <FormLabel>Table Number: {order.Table_No}</FormLabel>
            <FormLabel>Table Number: {order.Order_ID}</FormLabel>

           <RemoveButton onClick={(event) => handleClick(event, order.Order_ID)} > Cancel Order</RemoveButton>
        </Container>
      </div>
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
