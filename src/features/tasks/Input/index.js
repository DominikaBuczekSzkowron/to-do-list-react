import styled from "styled-components";

export default styled.input`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 0;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-bottom: 20px;
    margin-right: 20px;
    margin-left: 20px;
  }
`;
