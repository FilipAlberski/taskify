import {
    ErrorContainer,
    ImageContainer,
    ErrorImage,
    ErrorText,
    LogoContainer,
} from "./Error.styled";

import Logo from "../../components/Logo/Logo";
import errorImg from "../../assets/errorPage.svg";
const Error = () => {
    return (
        <ErrorContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <ImageContainer>
                <ErrorImage src={errorImg} />
            </ImageContainer>
            <ErrorText>Oops! Page not found</ErrorText>
        </ErrorContainer>
    );
};
export default Error;
