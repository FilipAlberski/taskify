import { RegisterContainer } from "./Register.styled";
import Logo from "../../components/logo/Logo";
import { useState } from "react";
import axios from "axios";
//redux
import { useDispatch, useSelector } from "react-redux";
import { setUser, setLoading, setToken } from "../../redux/slices/appSlice";

const Register = () => {
    //redux
    const dispatch = useDispatch();
    const appState = useSelector((state) => state.app);

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

        //redux set test user
    };

    const validate = () => {
        if (isMember) {
            return email && password;
        } else {
            return (
                username && email && password && password === confirmPassword
            );
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resposne = await axios.get("/api/v1");
        console.log(resposne);

        //fetch
    };
    return (
        <RegisterContainer>
            <div className="topPart">
                <Logo />
            </div>
            <div className="bottomPart">
                <form action="#" className="form" onSubmit={handleSubmit}>
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
                            <label
                                htmlFor="confirmPassword"
                                className="form-label"
                            >
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
                    <span
                        className="alreadyRegistered"
                        onClick={() => setIsMember(!isMember)}
                    >
                        {isMember ? "Need to register?" : "Already registered?"}
                    </span>
                </form>
            </div>
        </RegisterContainer>
    );
};
export default Register;
