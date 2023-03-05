import { ErrorContainer } from "./Error.styled";

import Logo from "../../components/Logo/Logo";
import { useSelector } from "react-redux";

import errorLight from "../../assets/error/errorLight.svg";
import errorDark from "../../assets/error/errorDark.svg";

const Error = () => {
    const theme = useSelector((state) => state.app.theme);
    return (
        <ErrorContainer>
            <nav>
                <Logo />
            </nav>
            <div className="content">
                <div className="left">
                    <div className="leftText">
                        <h1>404</h1>
                        <p>Page not found</p>
                    </div>
                </div>
                <div className="right">
                    {theme === "dark" ? (
                        <img src={errorDark} alt="error" />
                    ) : (
                        <img src={errorLight} alt="error" />
                    )}
                </div>
            </div>
        </ErrorContainer>
    );
};
export default Error;
