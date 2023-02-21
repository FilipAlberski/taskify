import { Button, CounterDiv } from "./IncDecr.styled.js";

const IncDecr = () => {
    const handleClick = (e) => {
        console.log(e.target.value);
    };
    return (
        <CounterDiv>
            <Button value={+1} onClick={handleClick}>
                Increment
            </Button>
            <Button value={-1} onClick={handleClick}>
                Decrement
            </Button>
        </CounterDiv>
    );
};
export default IncDecr;
