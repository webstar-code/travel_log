import styled from 'styled-components';
import px2vw from './px2vw';

export const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #000839;
    color: #ffa41b;
    padding: ${px2vw(20)} ${px2vw(40)};
    font-size: ${px2vw(22)};
    font-family: sans-serif;
    justify-content: space-between

`;

export const Logo = styled.h1`
    text-transform: uppercase;
    font-size: ${px2vw(68)};
    font-weight: bold;
    letter-spacing: 2px;
    line-height: 1px;
    /* margin-right: ${px2vw(100)}; */
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    list-style-type: none;
    padding: 0;

    @media (max-width: 768px) {
        display: none;
    }

`;



export const Item = styled.li`
    color: #ffa41b;
    text-decoration: none;
    text-transform: uppercase;
    margin-right: ${px2vw(100)};
    `;

export const BurgerWrapper = styled.div`
    margin: 0;
    @media (min-width: 768px) {
        display: none;
    }

`;