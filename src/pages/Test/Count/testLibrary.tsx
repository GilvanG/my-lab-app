import { useState } from "react";
import { CountSimple } from "../../../components/Tests/Count";

export function sumCount(value: number){
  return value+1
}

export const CountTL = () => {
  const [count, setCount] = useState(0);
  return (
    <CountSimple
      value={count}
      incrementFn={() => setCount((value) => value + 1)}
      decrementFn={() => setCount((value) => value - 1)}
    />
  );
};
// 
