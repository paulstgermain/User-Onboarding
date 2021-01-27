import React, { useState, useEffect } from 'react';
import axios from "axios";
import * as yup from 'yup';

export default function Form(props) {

    const { values, errors, change, submit, disabled} = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
      }

    return (
        <form onSubmit={onSubmit}>
            <label>User Name: 
                <input 
                type='text' 
                name='userName' 
                value={values.userName} 
                onChange={onChange}
                placeholder='Enter name here...'
                ></input>
            </label>

            <label>Email: 
                <input 
                type='email' 
                name='email' 
                value={values.email} 
                onChange={onChange}
                placeholder='Enter email here...'
                ></input>
            </label>

            <label>Password: 
                <input 
                type='password' 
                name='password' 
                value={values.password} 
                onChange={onChange}
                placeholder='Enter password here...'
                ></input>
            </label>

            <label>I accept the terms of service: 
                <input 
                type='checkbox' 
                value={values.tos} 
                name='tos' 
                onChange={onChange}
                ></input>
            </label>

            <button disabled={disabled}>Sign Me Up!</button>
        </form>
    )
}