import React from "react";
import { useSharedState } from "./lib/useSharedState"

function Echo() {
  const [val, ] = useSharedState();
  return (
    <div>
      {val}
    </div>
  );
}
export default Echo;
