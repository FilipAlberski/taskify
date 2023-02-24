import Logo from "../../components/Logo/Logo";
import { LandingContainer } from "./Landing.styled";

const Landing = () => {
    return (
        <LandingContainer>
            <div className="topPart">
                <Logo />
            </div>
            <div className="bottomPart">
                <div className="left">
                    <h1>Taskify</h1>
                </div>
                <div className="right">
                    <h1>Taskify</h1>
                </div>
            </div>
        </LandingContainer>
    );
};
export default Landing;
