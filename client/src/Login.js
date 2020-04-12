import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form'

import { Container, Heading, Form, Label, Input, Button,Error } from './styles/LoginStyles'

const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:1337' : 'https://travel-log-api-five.now.sh';

const Login = () => {

    const [redirect, setredirect] = useState(null);
    const { register, handleSubmit } = useForm();
    const [respond, setrespond] = useState(null)
    const onSubmit = async data => {
        const user = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await user.json();
        if (user.status === 200) {
            localStorage.setItem('auth-token', result.token);

            if (localStorage.getItem('auth-token')) {
                setredirect('/map');
            }
        } else {
            setrespond(result);
        }
    };

    return (
        <>
            <Container>
                <Heading>Login</Heading>
                {/* {respond ? <h1>{respond}</h1> : null} */}
                {respond ? <Error>{respond}</Error> : null}
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Label htmlFor="Email">Email: </Label>
                    <Input type="email" name="email" ref={register} placeholder="Email"></Input>
                    <Label htmlFor="password">Password: </Label>
                    <Input type="password" name="password" ref={register} placeholder="Password"></Input>
                    <Button type="submit">Login</Button>

                </Form>
                {redirect ? <Redirect to={{
                    pathname: `${redirect}`
                }}></Redirect> : null}

            </Container>
        </>
    )

}

export default Login; 