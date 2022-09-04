import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  width: 580px;
  height: 666px;
  padding: 24px 30px;

  h2 {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #0d263b;
  }

  label {
    display: flex;
    flex-direction: column;
    margin: 15px 0;
  }

  input,
  select {
    padding: 5px;
    margin-top: 5px;
  }
`;

export const RegisterBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  width: 100%;
  background: #0061df;
  border-radius: 2px;
`;
