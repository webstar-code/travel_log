import styled ,{keyframes} from 'styled-components'



export const Container = styled.div`
    width:70%;
    height:100vh;
    margin: auto;
    animation: 5s rollin;
    color: white;

    @media (max-width: 620px) {
        width: 90%;
        
    }
`;


export const Heading = styled.h1`
    font-size: 3.25rem;
    margin: 0.5em 0.5em;
    font-weight: 400px;

    @media (max-width: 620px) {
        margin:0;
        margin-bottom: 0.5em;
        font-size: 2rem;
    }

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

`;

export const Label = styled.label`
    font-size: 1.5rem;
    margin: 0.5em 1.5em;
    margin-bottom: 0.25em;
    @media (max-width: 620px) {
        display: none;
    }

`;



export const Input = styled.input`
    width: 70%;
    margin: 0.5em 1.75em;
    padding: 15px 10px;
    outline: none;
    font-size: 1.25rem;
    border-radius: 5px;
    border: none;

    @media (max-width: 620px) {
        width: 95%;
        font-size: 1rem;
        margin: 0.5em auto;
        padding: 1rem 0.5em;
    }
`;

export const Button = styled.button`
    width: 25%;
    margin: 1.5em 1.5em;
    padding: 0.5em 1.5em;
    cursor: pointer;
    font-size: 1.5rem;
    border-radius: 5px;
    border: none;

    
    @media (max-width: 620px) {
        width: 95%;
        font-size: 1.25rem;
        margin: 0.5em auto;
        padding: 0.5em 0.25em;
        background-color: #ffa41b;
        color: black;
    }
    
`;
export const Footer = styled.div`
    background: #333333;
    font-size: 28px;
    height: 200px;
    text-align: center;
`;

export const Error = styled.div`
    width: 70%;
    margin: 0.5em 1.75em;
    padding: 15px 10px;
    background-color: crimson;
    color: white;
    font-size: 1.25rem;
    border-radius: 5px;

    @media (max-width: 620px) {
        width: 95%;
        font-size: 1rem;
        margin: 0.5em auto;
        padding: 1rem 0.5em;
    }
`;