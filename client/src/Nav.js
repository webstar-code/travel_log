import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import CollapseMenu from './CollapseMenu'

import { Navbar,Logo , List, Item, BurgerWrapper} from './styles/NavStyles'
import BurgerMenu from './BurgerMenu';
import mountains from './styles/mountains.jpg';
import city from './images/city1920x1080.jpg'


export default function Nav(props) {
    const styles = {
        
        textDecoration: 'none'
    }

    const [open, setopen] = useState(false);

    const handleopen = () => {
        setopen(!open);
    }

    return (
        <>
        <Navbar>    
                    <div>
                    <Logo>travel-Log</Logo>
                    </div>
                <List>
                <Link style={styles} to={'/'} onClick={() => props.Setbimg(city)} >
                    <Item > 
                        Home
                    </Item>
                </Link>

                <Link style={styles} to={'/login'}  onClick={() => props.Setbimg(mountains)}>
                    <Item >
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
