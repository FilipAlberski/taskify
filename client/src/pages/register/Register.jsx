import { RegisterContainer } from "./Register.styled";

import { useState } from "react";
const Register = () => {
    const [isMember, setIsMember] = useState(false);

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const { username, email, password, confirmPassword } = values;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        console.log(values);
    };
    return (
        <RegisterContainer>
            <form action="#">
                <h1>{isMember ? "Login" : "Register"}</h1>
                {!isMember && (
                    <div className="form-row">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            onChange={handleChange}
                            type="text"
                            value={username}
                            name="username"
                            className="form-input"
                        />
                    </div>
                )}
                <div className="form-row">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        onChange={handleChange}
                        type="email"
                        value={email}
                        name="email"
                        className="form-input"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={handleChange}
                        name="password"
                        className="form-input"
                    />
                </div>
                {!isMember && (
                    <div className="form-row">
                        <label htmlFor="confirmPassword" className="form-label">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={handleChange}
                            name="confirmPassword"
                            className="form-input"
                        />
                    </div>
                )}
                <button className="form-btn" type="submit">
                    {isMember ? "Login" : "Register"}
                </button>
                <span onClick={() => setIsMember(!isMember)}>
                    {isMember ? "Need to register?" : "Already registered?"}
                </span>
            </form>
        </RegisterContainer>
    );
};
export default Register;
