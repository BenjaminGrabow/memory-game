import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const StyledHeader = styled.header`
width: 100%;

a {
        width: 100%;
        text-decoration: none;
        margin: 1rem;
}

`;

const Header = () => {
        return (
                <StyledHeader>
                        <NavLink to="/" >Home</NavLink>
                        <NavLink to="/" >Home</NavLink>
                        <NavLink to="/" >Home</NavLink>
                </StyledHeader>
          );
}
 
export default Header;