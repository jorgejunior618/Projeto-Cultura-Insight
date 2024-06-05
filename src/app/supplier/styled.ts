import { colors } from "@/constants";
import styled from "styled-components";

export const FormWrapper = styled.form`
  /* padding: 20px 0%; */

  section.formSection {
    width: 100%;
    height: fit-content;
    border: 1px solid white;
    border-top: 1px solid #FFFFFF30;
    border-bottom: 1px solid #FFFFFF30;
    padding: 20px 10px;

    &.first {
      margin-top: 25px;
      border-top: 1px solid white;
      border-bottom: 1px solid #FFFFFF30;
      border-radius: 10px 10px 0 0;
    }
    &:last-child {
      border-bottom: 1px solid white;
      border-top: 1px solid #FFFFFF30;
      margin-top: 0;
      border-radius: 0 0 10px 10px;
    }
    
    h2 {
      margin-bottom: 15px;
      margin-left: 5px;
    }
  }
`;

export const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  margin-bottom: 10px;

  label {
    margin-bottom: 5px;
    display: block;
  }
  input {
    width: 100%;

    &:disabled {
      background-color: ${colors.secBackground};
      color: ${colors.primary};
    }
  }
`;
