import { useEffect, useState, useRef } from 'react';

function useNavi() {
    const [isFlow, setFlow] = useState(false);
    
    const handleScroll = () => {
        (window.scrollY > 0) ? setFlow(true) : setFlow(false)
    } 

    const debounce = (func, wait=20, immediate = true) => {
        let timeOut;
        return () => {
            let context = this,
            args = arguments
            const later = () => {
                timeOut =null;
                if (!immediate) func.apply(context, args)
            }
            const call = immediate && ! timeOut;
            clearTimeout(timeOut)
            timeOut = setTimeout(later, wait)
            if (call) func.apply(context, args)
        }
    }

    useEffect(() => {
        window.addEventListener(scroll, debounce(handleScroll))
        return () => {
            window.removeEventListener(scroll, () => handleScroll)
        }
    }, [debounce, handleScroll])

    return isFlow
}

export default useNavi;