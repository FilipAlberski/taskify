//components
import { RegisterContainer } from "./Register.styled";
import Logo from "../../components/Logo/Logo";
import FormRow from "../../components/formRow/FormRow";

//react
import { useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
    setUser,
    setLoading,
    setToken,
    setAlert,
} from "../../redux/slices/appSlice";
import ThemeSwitch from "../../components/ThemeSwitch/ThemeSwitch";

const Register = () => {
    //isMember
    const [isMember, setIsMember] = useState(false);

    //values of form
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
    };

    //handle submit

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <RegisterContainer>
            <nav>
                <Logo />
                <ThemeSwitch />
            </nav>

            <form>
                <div className="title">
                    <h1>{isMember ? "Login" : "Register"}</h1>
                </div>
                <div className="inputs">
                    {!isMember && (
                        <FormRow
                            type="text"
                            name="username"
                            value={username}
                            placeholder="Your nick name"
                            handleChange={handleChange}
                            labelText="Username"
                        />
                    )}
                    <FormRow
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Your internet mail"
                        handleChange={handleChange}
                        labelText="Email"
                    />
                    <FormRow
                        labelText="Password"
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Your secret password"
                        handleChange={handleChange}
                    />
                    {!isMember && (
                        <FormRow
                            labelText="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            placeholder="Let's confirm your password"
                            handleChange={handleChange}
                        />
                    )}
                </div>

                <button
                    type="submit"
                    className="submitButton"
                    onClick={handleSubmit}
                >
                    {isMember ? "Login" : "Create Account"}
                </button>
                <div className="isMember">
                    <p>
                        {isMember
                            ? "Don't have an account? "
                            : "Already have an account? "}
                        <span onClick={() => setIsMember(!isMember)}>
                            {isMember ? "Register" : "Login"}
                        </span>
                    </p>
                    {isMember && (
                        <p>
                            <span>Forgot password?</span>
                        </p>
                    )}
                </div>
            </form>
        </RegisterContainer>
    );
};
export default Register;
