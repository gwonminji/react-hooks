
import { useEffect, useRef } from "react"

function useFadeIn() {
  const useFadeIn = (duration = 1, delay = 0) => {
    const el = useRef();
    useEffect(() => {
      if(el.current){
        const { current } = el;
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        current.style.opacity = 1;
      }
    }, [])
    return{
      ref: el,
      style: {opacity: 0}
    }
  }
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div>
      <h1 {...fadeInH1}>FadeIn</h1>
      <p {...fadeInP}>lorem ipsum lalalalal</p>
    </div>
  );
}

export default useFadeIn;