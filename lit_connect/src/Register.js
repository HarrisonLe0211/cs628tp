import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', { username, password });
            alert('User registered successfully');
        } catch (error) {
            alert('Error registering user');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 style={{color:'black', padding:'10px' , fontSize:"35px", fontWeight: 'bold', fontStyle:"italic"}}>Register</h2>
            <label style={{color: 'blue', padding:"10px",  fontSize:"25px", fontWeight: 'bold', fontStyle:"italic"}}>Username:  </label>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
             <br></br>
             <br></br>
       <label style={{color: 'blue', padding: "10px", fontSize:"25px", fontWeight:'bold', fontStyle:"italic"}}>Password: </label>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
             <br></br>
             <br></br>
            <button type="submit" style={{color: 'blue', padding: "10px", borderStyle: "solid 2px black", borderRadius:"25px", fontWeight:'bold', fontSize:'25px' }}>Register</button>
        </form>
    );
};

export default Register;
