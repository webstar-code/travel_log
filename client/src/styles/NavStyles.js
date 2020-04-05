import styled from 'styled-components'

export const Navbar = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    background: transparent;
    text-transform: uppercase;
    color: white;
    
`;

export const Logo = styled.h1`
    /* margin: 0 12em 0 0; */
    font-size:2rem;
    font-weight: 500;
    @media (max-width: 620px) {
     font-size: 1.25rem;
     font-weight: 300px;   
    }
`;

export const Item = styled.p`
    margin-right: 2.75rem;
    font-size: 1.25rem;
    color: white;
    font-weight: 500;

    :hover{
        text-decoration: underline;
    }
`;

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    @media (max-width: 620px) {
        display: none;
    }

`;

export const BurgerWrapper = styled.div`
    margin: 0;
    @media(max-width: 620px) {
        display: block;
    }
`;

