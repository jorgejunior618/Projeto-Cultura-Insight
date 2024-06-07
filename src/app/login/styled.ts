import { colors } from "@/constants";
import styled from "styled-components";

export const LoginWrapper = styled.section`
  position: relative;
  padding: 50px 40px;
  border-radius: 20px;
  border: 1px solid white;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  margin-top: 10vh;
  background-color: ${colors.secBackground};

  h1 {
    text-align: center;
  }
  button {
    margin-top: 35px;
    width: 100%;
  }

  @media only screen and (max-width: 800px) {
    position: absolute;
    max-width: 100%;
    margin: 0;
    left: 0;
    padding: 50px 60px;
    border-radius: 0;
    border: none;
    height: calc(100vh - 110px);
    /* 
    right: 0; */
  }
`;
export const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 20px;
  
  label {
    scale: .8;
    opacity: .8;
    transition: opacity .3s, scale .3s;
    padding-bottom: 5px;
  }
  &:hover label, &:focus-within label {
    scale: 1;
    opacity: 1;
  }
`;