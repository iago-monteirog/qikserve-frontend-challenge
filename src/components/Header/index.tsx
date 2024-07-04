import { NavLink } from "react-router-dom"
import { HeaderContainer } from "./styles"

export const HeaderComponent = () => {
    return (
        <HeaderContainer>
            <nav>
                <NavLink to="/" title="Menu" autoFocus>Menu</NavLink>
                <NavLink to="/entrar" title="Menu">Entrar</NavLink>
                <NavLink to="/contato" title="Menu">Contato</NavLink>
            </nav>
        </HeaderContainer>
    )
}