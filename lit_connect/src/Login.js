import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            alert(response.data);
        } catch (error) {
            alert('Error logging in');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 style={{color: 'black', padding: '10px', fontSize:"35px" , font:"bold" }} >Login</h2>
            <label style={{color: 'blue', padding: "10px", fontSize:"25px", fontStyle:"italic", fontWeight:'bold'}}>Username:  </label>
            <input
                type="text"

                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <br></br>
            <br></br>
            <label style={{color: 'blue', padding: "10px" , fontSize:"25px" , fontStyle:"italic", fontWeight:"bold"}}>Password:  </label>
            <input
                type="password"

                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <br></br>
            <br></br>
            <button type="submit" style={{color: 'blue', padding:"10px", borderStyle: 'solid', borderRadius:'25px', fontWeight:'bold', fontSize:'25px'}}>Login</button>
        </form>
    );
};

export default Login;
