import React from "react";
import useFetchIP from "../Hooks/useFetchIP.js";
import Able from "./Able.js";
import NotAble from "./NotAble.js";

function IpTracker() {
  const [state] = useFetchIP();

  return <div>{state === "Mérida" ? <Able /> : <NotAble />}</div>;
}

export default IpTracker;
