import styled from "styled-components";

export const TaskForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-top: 1px solid #ddd;

  @media (min-width: 768px) {
    margin-bottom: 0px;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
  }
`;

export const ButtonAddNewTask = styled.button`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  padding: 20px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.backgroundColor};
  border-color: ${({ theme }) => theme.colors.primaryColor};
  border-style: solid;
  transition: 1s;
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    transform: scale(1.03);
    filter: brightness(120%);
  }

  @media (min-width: 768px) {
    display: flex;
    flex-shrink: 0;
    margin-right: 20px;
    width: 180px;
  }
`;
