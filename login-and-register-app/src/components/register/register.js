import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        })
    }
    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {

            axios.post('http://localhost:8000/register', user)
                .then(res => alert(res.data.message))
            navigate("/login");
        } else if (password !== reEnterPassword) {
            toast.error("Your Re-entered password is not Matched");
        }
        else {
            alert("invalid");
        }
    }
    return (
        <div className='register'>
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Enter your Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder='Enter your Password' onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder='Re-enter your Password' onChange={handleChange}></input>
            <div className='button' onClick={register}>Register</div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div>or</div>
            <div className='button' onClick={() => navigate("/login")}>Login</div>

        </div>
    )
}

export default Register