import {
    ErrorContainer,
    ImageContainer,
    ErrorImage,
    ErrorText,
    LogoContainer,
} from "./Error.styled";
import errorImg from "../../assets/errorPage.svg";
const Error = () => {
    return (
        <ErrorContainer>
            <LogoContainer>
                <h1>Logo</h1>
            </LogoContainer>
            <ImageContainer>
                <ErrorImage src={errorImg} />
            </ImageContainer>
            <ErrorText>Oops! Page not found</ErrorText>
        </ErrorContainer>
    );
};
export default Error;
