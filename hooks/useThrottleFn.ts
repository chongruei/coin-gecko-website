import { useEffect, useRef } from "react";

export const useThrottleFn = (callback: Function, ms = 200) => {
  const callbackRef = useRef<Function>(callback);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return () => {
    if (!timeoutRef.current) {
      callbackRef.current();
      timeoutRef.current = setTimeout(() => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = undefined;
      }, ms);
    }
  };
};
