import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import CollapseMenu from './CollapseMenu'

import { Navbar,Logo , List, Item, BurgerWrapper} from './styles/NavStyles'
import BurgerMenu from './BurgerMenu';

export default function Nav() {
    const styles = {
        textDecoration: 'none'
    }

    const [open, setopen] = useState(false);

    const handleopen = () => {
        setopen(!open);
    }
    console.log(open);

    return (
        <>
        <Navbar>
                    <Logo>travel-Log</Logo>

            <List>
         
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
            <BurgerWrapper>
            <BurgerMenu open={open} handleopen={handleopen}/>

            </BurgerWrapper>



        </Navbar>
        {open ? <CollapseMenu></CollapseMenu> : null}
        </>
    );

}