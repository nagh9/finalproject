import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login }  from '../slices/userSlice';
import { Link } from "react-router-dom";
import '../Css/appp.css';


const SignInPage= () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const loginStatus = useSelector((state) => state.users.loginStatus);
    const error = useSelector((state) => state.users.error);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        dispatch(login({ email, password }));
      };

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            {loginStatus === 'loading' && <p>Loading...</p>}
      {loginStatus === 'failed' && <p>Error: {error}</p>}
      {loginStatus === 'succeeded' && <p>Login successful!</p>}
            <form action="/home" onSubmit={handleSubmit}>
                <p>
                    <label>email address</label><br/>
                    <input 
                     type="email"
                     id="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)} />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" 
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/main">Back to Main</Link>.</p>
            </footer>
        </div>
    )
}

export default SignInPage