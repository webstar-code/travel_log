import React, {useState} from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form'

const Heading = styled.h1`
    margin: 20px 30px;
`;

const Form = styled.form`
    width: 50vw;
    display: flex;
    flex-direction: column;
    font-size: 20px;
`;

const Label = styled.label`
    margin: 5px 30px;
`;



const Input = styled.input`
    width: 50vw;
    margin: 5px 30px;
    padding: 10px 5px;
    font-size: 16px;

`;

const Button = styled.button`
    width: 20vw;
    font-size: 20px;
    margin: 10px auto;
    padding: 10px 30px;
    cursor: pointer;

`;


 const Login = () => {

    const [redirect, setredirect] = useState(null);
    const {register, handleSubmit} = useForm();
    const [respond, setrespond] = useState(null)
    const onSubmit = async data => {
        console.log(data);
        const user = await fetch('http://localhost:1337/login',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await user.json();
        console.log(result);
        if(user.status === 200) {
            console.log(result);
            localStorage.setItem('auth-token',result.token);
            console.log(localStorage.getItem('auth-token'));

            if(localStorage.getItem('auth-token')){
                setredirect('/map');
            }
        }else {
            setrespond(result);
        }
    };

    return(
        <div>
            <Heading>Login</Heading>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="Email">Email: </Label>
        <Input type="email" name="email" ref={register}></Input>
        <Label htmlFor="password">Password: </Label>
        <Input type="password" name="password" ref={register}></Input>
        <Button type="submit">Login</Button>
        
        </Form> 
        {respond ? <h1>{respond}</h1> : null}
        {redirect ? <Redirect to={{
            pathname: `${redirect}`
        }}></Redirect>: null}


        </div>





    )

}

export default Login; 