import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const Navigation = styled.ul`
  color: white;
  text-decoration: none;
  list-style-type: none;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName: activeClassName,
}))`
  color: white;
  text-decoration: none;
  font-size: large;
  padding: 20px;

  &.${activeClassName} {
    font-weight: bold;
  }
`;
