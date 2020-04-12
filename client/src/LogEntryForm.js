import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AddEntry } from './API'
import { Form } from './styles/LogEntryFormStyles'


const LogEntryform = ({ location, onClose }) => {
    const { register, handleSubmit } = useForm();
    const [error, seterror] = useState('');
    const [loading, setloading] = useState(false);
    const onSubmit = async (data) => {
        try {
            setloading(true);
            data.latitude = location.latitude;
            data.longitude = location.longitude;
            data.auth_token = localStorage.getItem('auth-token');
            const logEntry = await AddEntry(data, error);
            console.log(logEntry);
            onClose();
        } catch (error) {
            seterror(error);
            setloading(false);
        }

    }

    return (

        <Form className="form" onSubmit={handleSubmit(onSubmit)}>
            {error ? <h2>Error</h2> : null}
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" ref={register} name="email" required={true}></input>
            </div>
            <div>
                <label htmlFor="title">Title:</label>
                <input name="title" ref={register} required={true}></input>
            </div>
            <div>
                <label htmlFor="comments">Comment:</label>
                <input name="comments" ref={register}></input>
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea name="description" cols="20" rows="5" ref={register}></textarea>
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input name="image" ref={register} />
            </div>
            <div>
                <label htmlFor="visitDate">visited Date:</label>
                <input name="visitDate" type="date" ref={register} required={true}></input>
            </div>
            <button type="submit">{loading ? 'Loading...' : 'Add Entry'}</button>

        </Form>
    )

}

export default LogEntryform;