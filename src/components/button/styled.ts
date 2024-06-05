import { colors } from "@/constants";
import styled from "styled-components";

export const ButtonWrapper = styled.div`
  button {
    background-color: ${colors.primary};
    color: white !important;
    border: none;
    padding: 8px 15px;
    height: auto;

    &:hover {
      background-color: ${colors.secBackground};
    }
  }
  .floatingButton {
    position: absolute;
    bottom: 25px;
    right: 5vw;
  }
`;