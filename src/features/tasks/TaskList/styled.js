import styled, { css } from "styled-components";

export const List = styled.ul`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid #ddd;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 30px;
  word-break: break-word;
  padding: 10px 20px 10px 20px;
  border-bottom: 1px solid #eee;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  display: flex;
  flex-grow: 1;
  align-self: left;
  margin: 0px 20px;

  ${({ $done }) =>
    $done &&
    css`
      text-decoration: line-through;
      display: flex;
      text-align: start;
    `}
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  text-decoration: none;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-start;
  transition: 1s;
  cursor: pointer;
`;

export const ButtonDone = styled(Button)`
  color: ${({ theme }) => theme.colors.backgroundColor};
  background-color: rgb(17, 173, 17);

  &:hover {
    filter: brightness(120%);
  }
`;

export const ButtonRemove = styled(Button)`
  background-color: red;
  display: flex;
  justify-content: center;

  &:hover {
    filter: brightness(120%);
  }
`;
