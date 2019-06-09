import React from 'react';
import styled from 'styled-components';

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
                        <nav>
                                <a href="#">Home</a>
                                <a href="#">About</a>
                                <a href="#">Games</a>
                                <a href="#">Team</a>
                        </nav>
                </StyledHeader>
          );
}
 
export default Header;