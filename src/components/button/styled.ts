import { colors } from "@/constants";
import styled from "styled-components";

export const ButtonWrapper = styled.div`
  button {
    background-color: ${colors.primary} !important;
    color: white !important;
    border: none;
    padding: 8px 15px;
    height: auto;

    &:hover {
      background-color: ${colors.secBackground} !important;
      color: ${colors.primary} !important;
    }
  }
  .floatingButton {
    position: absolute;
    bottom: 10vh;
    right: 10vw;
  }
  .secondary {
    color: ${colors.primary} !important;
    background-color: white !important;
    border: 2px solid ${colors.primary} !important;
    
    &:hover {
      border-color: white !important;
      background-color: ${colors.primary} !important;
      color: white !important;
    }
  }
  .cancel {
    color: ${colors.red} !important;
    background-color: white !important;
    border: 2px solid ${colors.red} !important;
    
    &:hover {
      border-color: white !important;
      background-color: ${colors.red} !important;
      color: white !important;
    }
  }
`;