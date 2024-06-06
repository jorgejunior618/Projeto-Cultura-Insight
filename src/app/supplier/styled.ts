import { colors } from "@/constants";
import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  /* padding: 20px 0%; */

  section.formSection {
    width: 100%;
    height: fit-content;
    /* border: 1px solid white; */
    /* border-top: 1px solid #FFFFFF30; */
    /* border-bottom: 1px solid #FFFFFF30; */
    
    .ant-spin-container {
      padding: 20px 10px;
    }
    &.first {
      margin-top: 25px;
      /* border-top: 1px solid white; */
      /* border-radius: 10px 10px 0 0; */
      border-bottom: 1px solid #FFFFFF30;
    }
    &.last {
      /* border-bottom: 1px solid white; */
      /* border-radius: 0 0 10px 10px; */
      border-top: 1px solid #FFFFFF30;
      margin-top: 0;
    }
    
    h2 {
      margin-bottom: 15px;
      margin-left: 5px;
    }
  }
  .btnGroup {
    display: grid;
    grid-template-columns: fit-content(100%) fit-content(100%);
    column-gap: 15px;
    align-items: center;
    margin: 15px 15px 0 auto;

    @media only screen and (max-width: 750px) {
      margin-bottom: 35px;
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
