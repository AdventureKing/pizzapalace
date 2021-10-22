import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {loginUser} from '../api/auth';
import {Card, Container, FormLabel, FormInput, Title, PageContainer, LogInButton} from "./LoginStyles";
import {CardImg} from "./order/OrderFormStyles";
import pizzaPhoto from "../pizzaCard.png";



export const Login = ({setToken}) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
        window.location.href = 'dashboard';

    }

    return (
        <PageContainer>
        <Card>
            <CardImg src={pizzaPhoto} alt="Avatar"/>
            <Container onSubmit={handleSubmit}>
                <Title>Please Log In To Place a Order</Title>
                <FormLabel>
                    <p>Username</p>
                    <FormInput type="text" onChange={e => setUserName(e.target.value)}/>
                </FormLabel>
                <FormLabel>
                    <p>Password</p>
                    <FormInput type="password" onChange={e => setPassword(e.target.value)}/>
                </FormLabel>
                <div>
                    <LogInButton type="submit">Log In</LogInButton>
                </div>
            </Container>
        </Card>
        </PageContainer>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

