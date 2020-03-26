import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form'

import { Container, Heading, Form, Label, Input, Button } from './styles/LoginStyles'

const Login = () => {

    const [redirect, setredirect] = useState(null);
    const { register, handleSubmit } = useForm();
    const [respond, setrespond] = useState(null)
    const onSubmit = async data => {
        console.log(data);
        const user = await fetch('http://localhost:1337/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await user.json();
        console.log(result);
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
        <Container>
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
            }}></Redirect> : null}

        </Container>

    )

}

export default Login; 