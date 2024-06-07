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
    grid-template-columns: 1fr 38px;
    column-gap: 25px;
    width: 100%;

    &.showThumb {
      grid-template-columns: 1fr 5fr 38px;
    }
    p {
      line-height: 1rem;
    }
    .options {
      cursor: pointer;
      display: flex;
      width: fit-content;
      padding: 8px;
      border-radius: 8px;
      border: 3px solid ${colors.mainBackground};

      span svg {
        font-size: 1.5rem;
      }
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
    box-shadow: 0 3px 3px #FFFFFF20;
  }

  @media only screen and (max-width: 800px) {
    main {
      display: flex;
      flex-direction: column;
      grid-template-columns: none;
      column-gap: unset;

      .thumb {
        width: 100%;
        margin-bottom: 10px;
      }
      section.cardChildren {
        width: 100%;
      }
      .options {
        width: 100%;
        align-items: center;
        justify-content: center;
      }
      section.cardOptions {
      }
    }
  }
`;