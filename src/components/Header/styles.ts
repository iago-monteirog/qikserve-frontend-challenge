// styles.ts
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.navBackgroundColour};
  height: 52px;
  width: 100%;
  padding: 0 16px;

  @media (max-width: 768px) {
    height: 64px;
  }
`;

export const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const PageTitle = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex: 1;
    justify-content: center;
    font-size: 1.5rem;
    color: ${(props) => props.theme.backgroundColour};
  }
`;

export const NavLinks = styled.nav<{ menuOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-transform: uppercase;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.backgroundColour};
    width: 14.5rem;
    height: 100%;
    padding: 15px;

    &:hover {
      border-bottom: 5px solid #fff;
    }

    &.active {
      border-bottom: 5px solid #fff;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 64px;
    right: 0;
    background-color: ${(props) => props.theme.navBackgroundColour};
    width: 100%;
    max-height: ${(props) => (props.menuOpen ? "200px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;

    a {
      width: 100%;
      padding: 10px 0;
    }
  }
`;
