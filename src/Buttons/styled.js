import styled, { css } from "styled-components";

export const BothButtons = styled.button`
  border: none;
  background-color: transparent;
  color: teal;
  transition: 1s;
  cursor: pointer;
  padding: 0 10px 0 0;

  &:hover {
    color: hsl(180, 100%, 30%);
  }
  &:disabled {
    color: #b1a9a9;
    padding: 0 10px 0 0;
    cursor: auto;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 10px 0;
  }
`;
