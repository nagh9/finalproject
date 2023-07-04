import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../slices/userSlice';
import '../Css/appp.css';


const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const signUpStatus = useSelector((state) => state.users.signUpStatus);
    const error = useSelector((state) => state.users.error);
    const handleSubmit = (e) => {
        e.preventDefault();
    
        dispatch(signUp({ name, email, password }));
      };

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            {signUpStatus === 'loading' && <p>Loading...</p>}
      {signUpStatus === 'failed' && <p>Error: {error}</p>}
      {signUpStatus === 'succeeded' && <p>Sign up successful!</p>}
      <form action="/home" onSubmit={handleSubmit}>
                <p>
                    <label>Username</label><br/>
                    <input  
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" 
                     id="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}/>
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" 
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
            <p>Already have an account  <Link to="/login">login</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
export default SignUpPage