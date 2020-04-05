import styled from 'styled-components'

export const Container = styled.div`
    /* width: 920px; */
    width: 70%; 
    margin: auto;

    @media(max-width:620px) {
        margin:auto;
    }
`;

export const Intro = styled.div`
    margin: 9em 1em;
    /* margin: 150px 30px; */
    color: white;
    @media(max-width:620px) {
        margin:4em 0;
    }
`;

export const Caption = styled.p`
    margin: 0;
    font-size: 3.25rem;
    font-weight: 600;
    @media(max-width:620px) {
        font-size: 2rem;
    }

`;

export const Para = styled.p`
    /* margin-top:10px;  */
    /* font-size: 18px; */
    margin: 0.25em 0.25em;
    font-size: 1.25rem;
    font-weight: 100px;
    @media(max-width:620px) {
        font-size: 1rem;
    }
    
`;

export const Img = styled.img`
    width:48px;
    height: 48px;
    @media(max-width:620px) {
        display: none;
    }
`;

export const Instruction = styled.div`
    margin-top: 12.5rem;
    padding: 2rem 0;
    display: flex;
    flex-direction : row;
    justify-content: center;
    background-color: whitesmoke;
    border-radius: 30px;
    /* height: 500px; */

    @media(max-width:620px) {
        flex-direction: column;
        background-color: transparent;
        padding: 0;
    }
`;

export const Inst = styled.div`
    margin-right: auto;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 20px;
    letter-spacing: 1px;
    @media(max-width:620px) {
        margin:0;
        padding:0;
        letter-spacing: 0px;
    }
`;

export const Screenshot = styled.img`
    width: 300px;
    height: 200px;
    box-shadow: 0px 1px 20px 1px black;
    @media(max-width:620px) {
        width:100%;
        height:80%;
    }

    /* padding: 20px; */
    /* margin-bottom: px; */
`;

export const H4 = styled.h3`
    margin: 0;
    font-size: 2rem;
    @media(max-width:620px) {
        font-size: 1.5rem;
    }
`;

export const P = styled.p`
font-size: 1.25rem;
word-wrap: break-word
    
`;

export const Footer = styled.div`
    background: #333333;
    font-size: 2rem;
    height: 100px;
    text-align: center;
    margin: 0;
`;