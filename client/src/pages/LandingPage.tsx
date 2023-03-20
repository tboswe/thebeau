import React from 'react';

const LandingPage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to thebeau.dev!</h1>
            <br />
            <p>You are not logged in</p>
            <div>
                <a href="/login"><button>Login</button></a>
                <a href="/register"><button>Register</button></a>
            </div>

        </div>
    );
};

export default LandingPage;