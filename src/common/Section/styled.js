import styled from "styled-components";

export const Sections = styled.section`
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  box-shadow: 0px 0px 5px 0px #ddd;
`;

export const Header = styled.div`
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: left;
  flex-grow: 1;
  padding: 0 20px 0 20px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  padding: 20px;
  margin: 0px;
  display: flex;
  flex-grow: 1;
`;
