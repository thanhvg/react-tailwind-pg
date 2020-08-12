import React from "react";
import { useSharedState } from "./lib/useSharedState"

function Input() {
  const [val, setVal] = useSharedState();
  return (
    <input type="text" value={val} onChange={(e) => setVal(e.target.value)}/>
  );
}
export default Input;
