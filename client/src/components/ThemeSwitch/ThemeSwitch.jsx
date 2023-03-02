import { ThemeSwitchContainer } from "./ThemeSwitch.styled";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../redux/slices/appSlice";
const ThemeSwitch = () => {
    const theme = useSelector((state) => state.app.theme);
    //dispatch

    const dispatch = useDispatch();

    const [toggled, setToggled] = useState(theme === "light" ? false : true);

    const [isToggled, toggle] = useState(toggled);

    const callback = () => {
        toggle(!isToggled);

        dispatch(setTheme(isToggled ? "light" : "dark"));
    };
    return (
        <ThemeSwitchContainer className="themeSwitch">
            <label>
                <input
                    type="checkbox"
                    defaultChecked={isToggled}
                    onChange={callback}
                />
                <span />
            </label>
        </ThemeSwitchContainer>
    );
};
export default ThemeSwitch;
