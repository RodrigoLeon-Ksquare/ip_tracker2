import { useEffect, useState } from "react";

function useFetchIP() {
  const [ip, setIP] = useState("");
  const [state, setState] = useState("");
  const getIP = async () => {
    const req = await fetch("https://ipapi.co/json");
    const res = await req.json();
    console.log(res);
    //console.log(res.IPv4);
    console.log(res.city);
    console.log(typeof res.city);

    setIP(res.ip);
    setState(res.city);
  };

  useEffect(() => {
    getIP();
  }, []);

  console.log(state);

  return [state, ip];
}

export default useFetchIP;
