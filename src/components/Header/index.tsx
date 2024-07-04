// HeaderComponent.jsx
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HeaderContainer, MenuIcon, NavLinks, PageTitle } from "./styles";
import { List } from '@phosphor-icons/react'

export const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const currentPage = location.pathname === "/" ? "Menu" : location.pathname.substring(1);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <PageTitle>{currentPage}</PageTitle>
      <MenuIcon onClick={handleMenuToggle}>
        <List size={32} color="#fff" />
      </MenuIcon>
      <NavLinks menuOpen={menuOpen}>
        <NavLink to="/" title="Menu" autoFocus onClick={handleMenuToggle}>
          Menu
        </NavLink>
        <NavLink to="/entrar" title="Entrar" onClick={handleMenuToggle}>
          Entrar
        </NavLink>
        <NavLink to="/contato" title="Contato" onClick={handleMenuToggle}>
          Contato
        </NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};
