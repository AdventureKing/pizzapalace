import styled from "styled-components";


export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 25%;
  align-content: center;

  margin: 30px;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
export const Container = styled.form`
  background: #000000;
  //border-radius: 25px;
  //margin: 20px;
  padding: 20px;
  //border: 2px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormLabel = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: white;
  font-size: 20px;
  font-weight: 200;
`;

export const FormInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const Title = styled.h1`
  color: white;
`;


export const LogInButton = styled.button`
  margin: 5px;
  box-shadow: inset 0px -3px 7px 0px #29bbff;
  background: linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
  background-color: #2dabf9;
  border-radius: 3px;
  border: 1px solid #0b0e07;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  padding: 9px 23px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #263666;

  :hover {
    background: linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
    background-color: #0688fa;
  }

  :active {
    position: relative;
    top: 1px;
  }
`;