import React, { useState } from 'react'

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const logInUser = () => {
        console.log(email, password);
    };

    return (
        <div>
            <h1>Log Into Your Account</h1>
            <form>
                <div>
                    <label>E-mail: </label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="" />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} id="" />
                </div>
                <button type="button" onClick={() => logInUser()}>Submit</button>
            </form>
        </div>
    )
}

export default LoginPage