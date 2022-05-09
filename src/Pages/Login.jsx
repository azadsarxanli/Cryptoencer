import React, { useState }  from 'react'
import '../assets/css/Login.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Login() {

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: data.email,
            password: data.password
        };

        axios.post("http://localhost:3001/api/auth/login", userData).then((response) => {
            console.log(response);
        });
    };

    

    return (
        <div className='align'>
            <div className="grid">
                <form onSubmit={handleSubmit} className="form login">

                    <div className="form__field">
                        <label for="login__username">
                            <i class="far fa-user"></i>
                            <span className="hidden">Username</span></label>
                        <input onChange={handleChange} autocomplete="email" id="login__username" type="email" name="email" className="form__input" placeholder="Username" required />
                    </div>

                    <div className="form__field">
                        <label for="login__password">
                            <i class="fas fa-lock"></i>
                            <span className="hidden">Password</span></label>
                        <input onChange={handleChange} id="login__password" type="password" name="password" className="form__input" placeholder="Password" required />
                    </div>

                    <div className="form__field">
                        <input type="submit" value="Sign In" />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login