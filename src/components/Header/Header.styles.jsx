import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    background-color: #EFFBEF;
    padding: 3px 20px;
    text-align: base;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.h1`
    color: #04B404 ;
    font-size: 36px;
    justify-content: flex-start;
    margin-left: 50px;
`;

export const Nav = styled.div`
   display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    gap: 35px;
    margin-right: 45px;
`;

export const NavItem = styled.li`
`;

export const NavLink = styled(Link)`
    font-size: 25px;
    color: #04B404;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
        color:rgba(34, 183, 34, 0.29);
        
    }
`;