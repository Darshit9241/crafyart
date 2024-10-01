import { useState, useEffect, Dispatch, SetStateAction } from "react";

type GlobalState = boolean;

const useGlobalState = (): [
  GlobalState,
  Dispatch<SetStateAction<GlobalState>>
] => {
  const [state, setState] = useState<GlobalState>(false);

  useEffect(() => {
    const storedState = localStorage.getItem("globalState");
    if (storedState) {
      setState(JSON.parse(storedState));
    }
  }, []);

  const setGlobalState: Dispatch<SetStateAction<GlobalState>> = (newState) => {
    localStorage.setItem("globalState", JSON.stringify(newState));
    setState(newState);
  };

  return [state, setGlobalState];
};

export default useGlobalState;
