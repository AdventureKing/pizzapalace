import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {loginUser} from '../api/auth';

const Container = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: black;
  `;
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
  }

  return(
    <Container>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Container>
  );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

