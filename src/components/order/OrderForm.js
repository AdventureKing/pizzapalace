import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {placeOrder} from '../../api/order';
import {BallTriangle} from 'react-loading-icons';
import {Card, CardImg, Container, ErrorMessage, FormInput, FormLabel, LoadingContainer, Title} from './OrderFormStyles';
import useToken from '../../context/useToken';
import {AddButton} from './OrderPageStyles';
import pizzaPhoto from "../../pizzaCard.png";

export const OrderForm = ({setAlert}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();

    const {token} = useToken();
    const [loading, setLoading] = useState(false);
    const createMessage = (response) => {
        return 'Your order of a ' + response.Size + ' ' + response.Crust + ' ' + response.Flavor + ' was placed. Sit Tight!'
    }
    const onSubmit = async (order) => {
        setLoading(true);
        const response = await placeOrder(order, token);
        setLoading(false);
        setAlert({title: 'Order Was Placed', message: createMessage(response), type: 'success', show: true})
        reset();
    }
    if (loading) {
        return (
            <Card>
                <CardImg src={pizzaPhoto} alt="Avatar"/>
                <LoadingContainer>

                    <BallTriangle/>
                </LoadingContainer>
            </Card>
        );

    }


    return (
        <Card>
            <CardImg src={pizzaPhoto} alt="Avatar"/>
            <Container onSubmit={handleSubmit(onSubmit)}>
                <Title>Please Fill Out Ordering Form</Title>
                <FormLabel>Crust</FormLabel>
                <FormInput
                    {...register("Crust", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[A-Za-z]+$/i
                    })}
                />
                {errors?.Crust?.type === "required" &&
                <ErrorMessage>We need to know what crust you want.</ErrorMessage>}
                <FormLabel>Flavor</FormLabel>
                <FormInput
                    {...register("Flavor", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[A-Za-z]+$/i
                    })}
                />
                {errors?.Flavor?.type === "required" && <ErrorMessage>What flavor do you want?</ErrorMessage>}
                <FormLabel>Size</FormLabel>
                <FormInput
                    {...register("Size", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[A-Za-z]+$/i
                    })}
                />
                {errors?.Size?.type === "required" && <ErrorMessage>What flavor do you want?</ErrorMessage>}
                <FormLabel>Table Number</FormLabel>
                <FormInput
                    type="number"
                    {...register("Table_No", {
                        required: true
                    })}
                />
                {errors?.Table_No?.type === "required" && <ErrorMessage>Where are you located?</ErrorMessage>}
                <div>
                    <AddButton type="submit">Place Order</AddButton>
                </div>
            </Container>
        </Card>
    );
}
  