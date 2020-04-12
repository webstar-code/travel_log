import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: #ffa41b;
    cursor: default;

    div {
        width: 100%;
        font-size: 1.25rem;
        display: flex;
        justify-content: space-between;
        /* padding: 10px 0px; */
        margin: 10px 0px;
    }

    label {
        margin-left: 10px;
    }

    input {
        margin-right: 10px;
        padding: 10px 10px;
    }
    textarea {
        margin-right: 10px;

    }

    button {
        font-size: 1.25rem;
        padding: 0.5em;
        margin-bottom: 0.5em;
    }

`;