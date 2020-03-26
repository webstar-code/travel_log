import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { AddEntry } from './API'

const LogEntryform = ({ location , onClose}) => {
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

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {error ? <h2>Error</h2> : null}
            <label htmlFor="email">Email</label>
            <input type="email" ref={register} name="email" required={true}></input>
            <label htmlFor="title">Title</label>
            <input name="title" ref={register} required={true}></input>
            <label htmlFor="comments">Comment</label>
            <input name="comments" ref={register}></input>
            <label htmlFor="description">Description</label>
            <textarea name="description" cols="20" rows="5" ref={register}></textarea>
            <label htmlFor="image">Image</label>
            <input name="image" ref={register} />
            <label htmlFor="visitDate">visited Date</label>
            <input name="visitDate" type="date" ref={register} required={true}></input>
            <button type="submit">{loading ? 'Loading...' : 'Add Entry'}</button>

        </form>
    )

}

export default LogEntryform;