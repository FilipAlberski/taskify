import { ErrorContainer } from "./Error.styled";

import Logo from "../../components/Logo/Logo";

import errorImg from "../../assets/errorPage.svg";
const Error = () => {
    return (
        <ErrorContainer>
            <nav>
                <Logo />
            </nav>
            <main className="container page">
                <div className="info">
                    <h1>Page not found</h1>
                    <p>
                        The page you are looking for might have been removed,
                        had its name changed or is temporarily unavailable.
                    </p>
                </div>
                <img src={errorImg} alt="" className="img main-img" />
            </main>
        </ErrorContainer>
    );
};
export default Error;
