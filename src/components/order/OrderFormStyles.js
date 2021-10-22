import styled from "styled-components";

export const Title = styled.h1`
  color: white;
`;
export const Container = styled.form`
  background: #000000;
  //border-radius: 25px;
  //margin: 20px;
  padding: 20px;
  //border: 2px solid red;
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

export const ErrorMessage = styled.p`
  color: #bf1650;

  ::before {
    display: inline;
    content: "⚠ ";
  }
`

export const RemoveButton = styled.button`

  box-shadow: inset 0px 1px 0px 0px #f29c93;
  background-color: #fe1a00;
  border-radius: 6px;
  border: 1px solid #d83526;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #b23e35;

  :hover {
    background-color: #ce0100;
  }

  :active {
    position: relative;
    top: 1px;
  }
`;

export const LoadingContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  background: #000000;
  padding: 20px;
`;


export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 75%;
  align-content: center;
  margin-bottom: 30px;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: auto;
`