
import { useState, useEffect } from "react"

function useScroll() {
  const useScroll = () => {
    const [state, setState] = useState({
      x: 0,
      y: 0
    });
    const onScroll = () => {
      console.log("y", window.scrollY);
      setState({x:window.scrollX, y:window.scrollY});
    }
    useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
    return state;
  }
  const { y } = useScroll();
  return (
    <div style={{height: "1000vh"}}>
      <h1 style={{position: "fixed", color: y > 100 ? "red" : "blue"}}>hi</h1>
    </div>
  );
}

export default useScroll;