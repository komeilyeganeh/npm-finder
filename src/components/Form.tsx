import React, { FormEvent, useState } from 'react';
import { FormProps } from '../interfaces';
import "./Form.css";



const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const [name, setName] = useState("");

    const submitHandler = (event: FormEvent): void => {
        event.preventDefault();
        setName("");
        onSubmit(name);
    }

    return <form className='form' onSubmit={submitHandler}>
        <input type="text" placeholder='package name...' value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="submit" value="Search"/>
    </form>
}

export default Form;