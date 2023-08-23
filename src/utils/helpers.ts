import { useEffect } from 'react';
export const throttle = (fn: Function, time: number) => {
  let isWaiting = false;

  return (...args: any[]) => {
    if (isWaiting) return;

    fn(...args);

    isWaiting = true;
    setTimeout(() => {
      isWaiting = false;
    }, time);
  };
};

export const useDebounce = (
  setDebouncedValue: Function,
  value: string,
  timeInMs: number,
) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, timeInMs);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, timeInMs, setDebouncedValue]);
};
