import React from 'react';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSignupMutation } from '../redux/services/testify';
import { setCredentials } from '../redux/authSlice';

function Signup() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const [signup] = useSignupMutation()

    const onSubmit = async (data) => {
        try {
            const user = await signup(data).unwrap()
            localStorage.setItem("token", user.token)
            dispatch(setCredentials(user))
            navigate('/profile')
        } catch (error) {
            console.log("Oh no there was an error")
        }
    }
    return (
        <div className='signin-container'>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input {...register("email")} />
                <label>Username</label>
                <input {...register("username")} />
                <label>Password</label>
                <input {...register("password")} type="password"/>
                <input type="submit" />
            </form>
        </div>
    );
}

export default Signup;