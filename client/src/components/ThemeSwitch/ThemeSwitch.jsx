import { ThemeSwitchContainer } from "./ThemeSwitch.styled";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../redux/slices/appSlice";

const ThemeSwitch = () => {
    const theme = useSelector((state) => state.app.theme);
    const dispatch = useDispatch();

    const [isToggled, setIsToggled] = useState(theme === "light");

    const toggleTheme = () => {
        setIsToggled(!isToggled);
        dispatch(setTheme(isToggled ? "dark" : "light"));
    };

    return (
        <ThemeSwitchContainer className="themeSwitch">
            <label>
                <input
                    type="checkbox"
                    checked={isToggled}
                    onChange={toggleTheme}
                />
                <span />
            </label>
        </ThemeSwitchContainer>
    );
};

export default ThemeSwitch;
