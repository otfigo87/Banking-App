import React from 'react';
import styled from 'styled-components';
import CenterLogo from '../assets/logo/logo_transparent.png';

const LogoImg = styled.img`
margin-top: 60px;
width: 15em;
height: 15em;
`;

function Logo(props) {
    return(
        <div>
            <LogoImg src={CenterLogo}/>
        </div>
    )
}

export default Logo;