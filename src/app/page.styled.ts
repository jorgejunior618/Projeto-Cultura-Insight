import { colors } from "@/constants";
import styled from "styled-components";

export const HomeContainer = styled.section`
  border-top: 1px solid white;
  padding-top: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;

  ul {
    flex: 1;
    padding-bottom: 25px;
    li {
      h2 {
        align-items: center;
      }
      p {
        margin: 6px 0 4px;
      }
    }
  }
  #reload {
    display: flex;
    padding: 5px 25px;
    left: 0;
    right: 0;
    position: absolute;
    top: 115px;
    z-index: 0;
    justify-content: center;
    overflow: hidden;

    p {
      cursor: pointer;
      transform: translateY(calc(-100% - 8px));
      transition: transform .5s;
      padding: 12px 15px;
      border-radius: 50px;
      background-color: ${colors.secBackground};
      box-shadow: 0 0 3px #FFFFFF20;
      display: flex;
      span svg {
        fill: ${colors.primary};
        font-size: 1.2rem;
      }
    }
    &:hover p {
      transform: translateY(0);
    }
  }
  button#home {
    display: grid;
    grid-template-columns: fit-content(100%) 0fr;
    gap: 0;
    transition: grid-template-columns .3s;
    align-items: center;
    border: none !important;
    
    span {
      overflow-x: hidden;
    }
    &:hover {
      background-color: ${colors.primary} !important;
      color: white !important;
      grid-template-columns: fit-content(100%) 1fr;
      gap: 5px;
    }
  }
`;

export const DropdownOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  span svg {
    margin-left: 6px;
  }
  &.editOption {
    color: ${colors.primary};
    span svg {
      fill: ${colors.primary};
    }
  }
  &.deleteOption {
    color: ${colors.red};
    span svg {
      fill: ${colors.red};
    }
  }
`;