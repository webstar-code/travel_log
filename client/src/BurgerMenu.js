import React from 'react'
import styled from 'styled-components'
import px2vw from './styles/px2vw'
import { ReactComponent as List } from './list.svg'

const Image = styled.div`
    
    svg {
    width: ${px2vw(100)};
    height: ${px2vw(100)};
    color: #ffa41b;
    fill: #ffa41b;
    stroke: #ffa41b;
    }
    
`;

const BurgerMenu = (props) => {

    const { handleopen } = props;

    return(
        <div>
            <Image>
            <List onClick={handleopen} />
            </Image>
        </div>
    )
}



export default BurgerMenu;

