import { AlertContainer } from "./Alert.styled";
import { useSelector } from "react-redux";

const Alert = () => {
    const appSlice = useSelector((state) => state.app);
    const { showAlert, alertType, alertText } = appSlice;

    return (
        <AlertContainer>
            {showAlert && (
                <div className={`alert ${alertType}`}>
                    <p>{alertText}</p>
                </div>
            )}
        </AlertContainer>
    );
};
export default Alert;
