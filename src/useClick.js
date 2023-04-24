
import { useEffect, useRef } from "react"

function useClick() {
    // if(typeof onClick !== "function"){
    //   return;
    // }
    const useClick = (onClick) => {
    const el = useRef();
    useEffect(() => {
        const elCurrent = el.current;
        if(elCurrent){
        elCurrent.addEventListener("click", onClick);
        }
        return () => {
        if(elCurrent){
            elCurrent.removeEventListener("click", onClick);
        }
        }
    }, []);
    return el;
    }
    const sayHello = () => console.log("say Hello");
    const title = useClick(sayHello);
    return (
    <div>
        <h1 ref={title}>Hi</h1>
        <input placeholder="la" />
    </div>
    );
}

export default useClick;