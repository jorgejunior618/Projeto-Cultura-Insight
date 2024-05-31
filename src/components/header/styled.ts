import { colors } from "@/constants";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 110px;

  img {
    border-radius: 5px;
  }
`;

export const LogoutContainer = styled.div`
  cursor: pointer;
  padding: 15px 20px;
  border-radius: 8px;
  transition: background-color .4s;

  &:hover {
    background-color: ${colors.red}40;
  }
  span, span svg {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    fill: ${colors.red};
  }
`;
export const LoginContainer = styled.div`
  cursor: pointer;
  padding: 15px 20px;
  border-radius: 8px;
  transition: background-color .4s;
  color: ${colors.green};

  &:hover {
    background-color: ${colors.green}40;
  }
`;