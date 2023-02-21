import { Button, CounterDiv } from "./IncDecr.styled.js";
//redux
import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";
const IncDecr = () => {
    const dispatch = useDispatch();

    return (
        <CounterDiv>
            <Button
                onClick={() => {
                    dispatch(increment());
                }}
            >
                Increment
            </Button>
            <Button
                onClick={() => {
                    dispatch(decrement());
                }}
            >
                Decrement
            </Button>
        </CounterDiv>
    );
};
export default IncDecr;
