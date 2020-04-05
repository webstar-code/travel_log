import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {Container, Heading, Form, Label, Input, Button } from './styles/SignupStyles'

const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:1337' : 'https://travel-log-api-five.now.sh';

const Signup = () => {
    const [redirect, setredirect] = useState(null);
    const [error, seterror] = useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        console.log(data);
        const user = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await user.json();
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
        <Container>
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


        </Container>




    )

}

export default Signup;