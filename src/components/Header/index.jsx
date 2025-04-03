import { HeaderContainer, Logo, NavItem, NavLink, NavList} from "./Header.styles";

const Header = () => {
  
    return (
        <HeaderContainer>
          <Logo> Bokashi. </Logo>

            <NavList>
              <NavItem><NavLink to="/">Home</NavLink></NavItem>
              <NavItem><NavLink to="/objetivos">Objetivos</NavLink></NavItem>
              <NavItem><NavLink to="/beneficios">Benefícios</NavLink></NavItem>
              <NavItem><NavLink to="/aplicacoes">Aplicações</NavLink></NavItem>
              <NavItem><NavLink to="/mododepreparo">Modo de Preparo</NavLink></NavItem>
            </NavList>
          
        </HeaderContainer>
    );
}
export default Header;