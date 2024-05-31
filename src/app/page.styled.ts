import { colors } from "@/constants";
import styled from "styled-components";

export const HomeContainer = styled.section`
  border-top: 1px solid white;
  padding-top: 20px;

  li {
    h2 {
      align-items: center;
    }
    p {
      margin: 6px 0 4px;
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