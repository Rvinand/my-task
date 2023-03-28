import {useCallback, useRef} from "react";

const useDebounce = (callback: Function, delay: number): (...args: any[]) => void => {
    const timer = useRef();

    return useCallback((...args: any[]) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        // @ts-ignore
        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay]);
}

export default useDebounce