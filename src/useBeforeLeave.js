
import { useEffect } from "react"

function App() {
    const useBeforeLeave = onBefore => {
    const handle = () => {
        onBefore();
    }
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, [])
    if(typeof onBefore !== "function"){
        return;
    }
    }
    const begForLife = () => console.log("pls dont leave");
    useBeforeLeave(begForLife);
    return (
    <div>
        <h1>hello</h1>
    </div>
    );
}

export default App;