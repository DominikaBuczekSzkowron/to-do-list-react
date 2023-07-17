import styled from "styled-components";

export const Container = styled.main`
  font-family: "Montserrat", sans-serif;
  margin: 0 auto;
  max-width: 1000px;
  padding: 20px;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primaryColor};
  transition: 1s;
  cursor: pointer;
  padding: 0 10px 0 0;

  &:hover {
    filter: brightness(120%);
  }
  &:disabled {
    color: #b1a9a9;
    padding: 0 10px 0 0;
    cursor: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 10px 0;
  }
`;
