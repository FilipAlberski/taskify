//components
import ThemeSwitch from "../../components/ThemeSwitch/ThemeSwitch";
import { RegisterContainer } from "./Register.styled";
import Logo from "../../components/Logo/Logo";
import FormRow from "../../components/formRow/FormRow";
import Alert from "../../components/alert/Alert";
//react
import { useEffect, useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
    setUser,
    setLoading,
    setToken,
    setShowAlert,
    setHideAlert,
} from "../../redux/slices/appSlice";
import { setAlertWithTimeout, stopAlert } from "../../redux/actions";
//axios and other
import axios from "axios";

const Register = () => {
    //redux

    const dispatch = useDispatch();
    const appSlice = useSelector((state) => state.app);

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
    //handle change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    //handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true));

        if (!email || !password || (!isMember && !username)) {
            setAlertWithTimeout(dispatch, "Please fill all fields", "danger");

            return;
        }

        if (!isMember && password !== confirmPassword) {
            setAlertWithTimeout(dispatch, "Passwords do not match", "danger");
            return;
        }

        const currentUser = {
            name: isMember ? "" : username,
            email,
            password,
        };
    };

    useEffect(() => {
        axios.get("/api/apitest").then((res) => {
            console.log(res.data.message);
        });
    }, []);

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
                {appSlice.showAlert && (
                    <Alert
                        alertType={appSlice.alertType}
                        alertText={appSlice.alertText}
                    />
                )}
                <div className="inputs">
                    {!isMember && (
                        <FormRow
                            type="text"
                            name="username"
                            value={username}
                            placeholder="Your nick name"
                            handleChange={handleChange}
                            labelText="Username:"
                        />
                    )}
                    <FormRow
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Your internet mail"
                        handleChange={handleChange}
                        labelText="Email:"
                    />
                    <FormRow
                        labelText="Password:"
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Your secret password"
                        handleChange={handleChange}
                    />
                    {!isMember && (
                        <FormRow
                            labelText="Confirm Password:"
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
                    disabled={appSlice.isLoading}
                >
                    {isMember ? "Login" : "Create Account"}
                </button>
                <div className="isMember">
                    <p>
                        {isMember
                            ? "Don't have an account? "
                            : "Already have an account? "}
                        <span
                            className="registerSpan"
                            onClick={() => setIsMember(!isMember)}
                        >
                            {isMember ? "Register" : "Login"}
                        </span>
                    </p>
                    {isMember && (
                        <p>
                            <span>
                                Forgot{" "}
                                <span className="forgotSpan">password</span>?
                            </span>
                        </p>
                    )}
                </div>
            </form>
        </RegisterContainer>
    );
};
export default Register;
