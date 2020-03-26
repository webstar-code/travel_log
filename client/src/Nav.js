import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Navbar = styled.div`
   
    box-sizing: border-box;
    background-color: #363434;
    color: #9e9e9e;
    padding: 20px 10px;
    font-size: 24px;
    font-family: sans-serif;

`;

const Logo = styled.h1`
margin: 0;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 2px;
    line-height: 1px;
`;

const List = styled.ul`
    display: grid;
    grid-template-columns: 50% auto auto auto;
    align-items: center;
    list-style-type: none;
`;

const Item = styled.li`
    color: #9e9e9e;
    text-decoration: none;
    text-transform: uppercase;
    `;


export default function Nav() {
    const styles = {
        textDecoration: 'none'
    }
    return (
        <Navbar>
            <List>
                <Item>
                    <Logo>travel-Log</Logo>
                </Item>
                <Link style={styles} to={'/'}>
                    <Item>
                        Home
                    </Item>
                </Link>

                <Link style={styles} to={'/login'}>
                    <Item>
                        login
                    </Item>
                </Link>

                <Link style={styles} to={'/signup'}>
                    <Item>
                        signup
                    </Item>
                </Link>
                
            </List>
        </Navbar>
    );

}