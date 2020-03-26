import styled from 'styled-components'
import px2vw from './px2vw'

export const Container = styled.div`
    margin: 0;
    width:100%;
    height: 100%;
    background-color: #cccccc;
    /* background-image: url("https://images.unsplash.com/photo-1507671280192-5900ae887d3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
    background-color: #cccccc;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; */

`;


export const Heading = styled.h1`
    margin: 20px 30px;

`;

export const Form = styled.form`
    width: 50vw;
    display: flex;
    flex-direction: column;
    font-size: 20px;
`;

export const Label = styled.label`
    margin: 5px 30px;
`;



export const Input = styled.input`
    width: 50vw;
    margin: 5px 30px;
    padding: 10px 5px;
    font-size: 16px;
    outline: none;
    border: 1px solid black;

`;

export const Button = styled.button`
    width: 20vw;
    font-size: 20px;
    margin: 10px auto;
    padding: 10px 30px;
    cursor: pointer;

    @media (max-width: 440px) {
       font-size: ${px2vw(20,440)};
       padding: ${px2vw(5,440)} ${px2vw(5,440)};
    }

`;