import Logo from "../../components/Logo/Logo";
import { LandingContainer } from "./Landing.styled";
import img from "../../assets/landingimg.svg";
const Landing = () => {
    return (
        <LandingContainer>
            <nav>
                <Logo />
            </nav>
            <main className="container page">
                <div className="info">
                    <h1>Get your business online</h1>
                </div>
                <img src={img} alt="test" className="img main-img" />
            </main>
        </LandingContainer>
    );
};

export default Landing;
