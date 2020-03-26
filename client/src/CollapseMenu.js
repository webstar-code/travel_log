import React from 'react'
import { Link } from 'react-router-dom'
import { Container, List, Item } from './styles/CollapseMenuStyles'

const CollapaseMenu = () => {
    const styles = {
        textDecoration: 'none'
    }
    return (
        <Container>
            <List>
                <Link style={styles} to={'/'}>
                    <Item>
                        home
                    </Item>
                </Link>
                <Link style={styles} to={'/login'}>
                    <Item>
                        Login
                    </Item>
                </Link>
                <Link style={styles} to={'/signup'}>
                    <Item>
                        signup
                    </Item>
                </Link>
            </List>
        </Container>
    )
}

export default CollapaseMenu