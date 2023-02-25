import { RegisterContainer } from "./Register.styled";
import FormRow from "../../components/FormRow/FormRow";
import { useState } from "react";
const Register = () => {
    const [isMember, setIsMember] = useState(false);
    return (
        <RegisterContainer>
            <form action="">
                <h1>{isMember ? "Login" : "Register"}</h1>
                {!isMember && (
                    <FormRow
                        type="email"
                        name="email"
                        value=""
                        handleChange={() => {}}
                        labelText="Email"
                    />
                )}
                <FormRow
                    type="text"
                    name="username"
                    value=""
                    handleChange={() => {}}
                    labelText="Username"
                />
                <FormRow
                    type="password"
                    name="password"
                    value=""
                    handleChange={() => {}}
                    labelText="Password"
                />
                {!isMember && (
                    <FormRow
                        type="password"
                        name="confirmPassword"
                        value=""
                        handleChange={() => {}}
                        labelText="Confirm Password"
                    />
                )}
                <button type="submit">{isMember ? "Login" : "Register"}</button>
                <p>
                    {isMember ? "Not a member?" : "Already a member?"}
                    <span onClick={() => setIsMember(!isMember)}>
                        {isMember ? "    Register" : "    Login"}
                    </span>
                </p>
            </form>
        </RegisterContainer>
    );
};
export default Register;
