import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router'
import { useLoginMutation } from '../redux/services/testify';
import { setCredentials } from '../redux/authSlice';

function Signin() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const [login] = useLoginMutation()

    const onSubmit = async (data) => {
        try {
            const user = await login(data).unwrap()
            localStorage.setItem("token", user.token)
            dispatch(setCredentials(user))
            navigate('/profile')
        } catch (error) {
            console.log("Oh no there was an error")
        }
    }

    return (
        <div className='signin-container'>
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input {...register("email")} />
                <label>Password</label>
                <input {...register("password")} type="password"/>
                <input type="submit" />
            </form>
        </div>
    );
}

export default Signin