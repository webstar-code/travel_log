import styled from 'styled-components'

export const Entrypopup = styled.div`
    width:25vw;
    height:80vh;

    @media (max-width: 620px) {
        width: 80vw;
        height: 80vh;
    }
`;

export const Mapoverlay = styled.div`
    width:98%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    position: absolute;
    top: 0;
    left:10px;
    padding: 5px;
    

`;

export const Menu = styled.div`
    svg {
    width: 10%;
    height: 10%;
    color: #ffa41b;
    fill: #ffa41b;
    stroke: #ffa41b;
    }
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;

`;

export const ProfileImg = styled.img`
    
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ffa41b;
    
`;

export const Username = styled.p`
    font-size: 2rem;
    color: #ffa41b;
    margin: 0 0.45em;
    font-weight: 300px;
`;


