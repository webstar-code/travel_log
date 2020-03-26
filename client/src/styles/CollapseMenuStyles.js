import styled from 'styled-components'
import px2vw from './px2vw'

export const Container = styled.div`
    font-size: ${px2vw(36)};
    background-color: #ffa41b;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin: ${px2vw(10)}; */
    margin: 0;
    padding: 0;
    list-style-type: none;

`;

export const Item = styled.li`
    color: #000839;
    text-decoration: none;
    text-transform: uppercase;
    padding: ${px2vw(10)} 0px;


`;
