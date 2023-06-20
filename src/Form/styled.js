import styled, { css } from "styled-components";

export const TaskForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  background-color: #fff;
  border-top: 1px solid #ddd;

  @media (min-width: 768px) {
    margin-bottom: 0px;
    width: 100%;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
  }
`;

export const TaskInput = styled.input`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 0;
  background-color: #fff;
  border-color: #eee;
  height: 30px;
  border-style: solid;
  padding: 20px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: left;
    margin-bottom: 0px;
    margin-right: 20px;
    margin-left: 20px;
  }

  @media (max-width: 767px) {
    margin-bottom: 20px;
    margin-right: 20px;
    margin-left: 20px;
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
  background-color: teal;
  color: #fff;
  border-color: teal;
  border-style: solid;
  transition: 1s;
  cursor: pointer;
  margin-right: 20px;

  &hover: {
    transform: scale(1.03);
  }

  @media (min-width: 768px) {
    display: flex;
    flex-shrink: 0;
    margin-right: 20px;
    width: 180px;
  }
`;
