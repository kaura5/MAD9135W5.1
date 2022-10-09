import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <h1>Home</h1>
            <button onClick={() => { navigate('/projects') }}>Take me to projects</button>
        </>
    )
}

export default Home;