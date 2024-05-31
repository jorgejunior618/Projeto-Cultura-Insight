import { colors } from "@/constants";
import styled from "styled-components";

export const CardContainer = styled.li`
  display: flex;
  margin: 0 auto;
  margin-top: 15px;
  padding: 15px 0;
  width: 98%;
  border-radius: 12px;
  background-color: ${colors.secBackground};
  transition: all .5s;

  main {
    padding: 0 25px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 5fr 38px;
    column-gap: 25px;
    width: 100%;

    p {
      line-height: 1rem;
    }

    .thumb {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 90px;
      background-color: #DDDDDD1A;
      border-radius: 5px;
      position: relative;
      
      div span svg {
        fill: white;
        font-size: 4rem;
      }
      img {
        max-width: 100%;
      }
    }
  }
  &:hover {
    width: 98.5%;
  }
`;