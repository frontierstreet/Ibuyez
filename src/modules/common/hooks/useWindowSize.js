
import { useState, useEffect } from "react";

export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    _2xl: 1536,
    _1440: 1440
}

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState();
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize || {};
};

export default useWindowSize