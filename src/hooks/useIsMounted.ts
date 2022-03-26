import { useEffect, useRef } from "react";

export default function useIsMounted() { //Use inside useEffect,before setState to prevent leak memory from setState unmounted 
    const isMounted = useRef(false);

    useEffect(():any => {
      isMounted.current = true;
      return () => isMounted.current = false;
    }, []);
  
    return isMounted;
}