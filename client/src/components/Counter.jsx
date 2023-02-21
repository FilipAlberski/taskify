import { useSelector } from "react-redux";

const Counter = () => {
    const { counter } = useSelector((state) => state);
    console.log(counter);
    return <h1>{counter.count}</h1>;
};
export default Counter;
