import { RegisterContainer } from "./Register.styled";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import { useState } from "react";

import Logo from "../../components/Logo/Logo";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
    setUser,
    setLoading,
    setToken,
    setAlert,
} from "../../redux/slices/appSlice";

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

    return <RegisterContainer>register</RegisterContainer>;
};
export default Register;
