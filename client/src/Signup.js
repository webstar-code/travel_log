import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';



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



const Signup = () => {
    const [redirect, setredirect] = useState(null);
    const [error, seterror] = useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        console.log(data);
        const user = await fetch('http://localhost:1337/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        console.log(user.status);
        const result = await user.json();
        console.log(result);
        if (user.status == 200) {
            setredirect('/login');
        } else {
            seterror(result);
        }
    };

    // function handleRedirect(e) {
    //     e.preventDefault();
    //     setredirect('/login');
    // }


    return (
        <div>
            <Heading>Sign up</Heading>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="Name">Name: </Label>
                <Input type="text" name="name" ref={register}></Input>
                <Label htmlFor="Email">Email: </Label>
                <Input type="email" name="email" ref={register}></Input>
                <Label htmlFor="password">Password: </Label>
                <Input type="password" name="password" ref={register}></Input>
                <Button type="submit">Sign up</Button>
                {error ? <h1>{error}</h1> : null}
                {redirect ? <Redirect to={{
                    pathname: '/login'
                }}></Redirect> : null}

            </Form>


        </div>





    )

}

export default Signup;