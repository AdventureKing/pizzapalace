import React from 'react';
import { useForm } from "react-hook-form";
import { placeOrder } from '../../api/order';
import {
   Container,
    FormLabel,
    Title,
    FormInput,
    ErrorMessage
    } from './OrderFormStyles';
import useToken from '../../context/useToken';

export const OrderForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

      const {token} = useToken();
      
    const onSubmit = async order => {
      const request = await placeOrder(order, token);
      //TODO : DO SOMETHING HERE 
    }
  
    return(
      <div>
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
            {errors?.Crust?.type === "required" && <ErrorMessage>We need to know what crust you want.</ErrorMessage>}
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
            <button type="submit">Submit</button>
          </div>
        </Container>
      </div>
    );
  }
  