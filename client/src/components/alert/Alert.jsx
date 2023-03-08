import { AlertContainer } from "./Alert.styled";
import { useSelector } from "react-redux";

const Alert = () => {
    const appSlice = useSelector((state) => state.app);
    const { showAlert, alertType, alertText } = appSlice;

    return (
        <AlertContainer className={`alert alert-${alertType}`}>
            {alertText}
        </AlertContainer>
    );
};
export default Alert;
