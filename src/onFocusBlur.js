
import { useRef } from "react"

function useFocusBlur() {
  const useFocusBlur = (w = 100) => {
    const el = useRef();
    // const { current } = el;
    const onFocus = () => {
      if(el.current){
        const { current } = el;
        console.log("focus", current);
        current.style.width = `${w}px`;
      }
    }
    const onBlur = () => {
      if(el.current){
        const { current } = el;
        console.log("blur", current);
        current.style.width = "100px";
      }
    }
    return{
      ref: el,
      onFocus: onFocus,
      onBlur: onBlur,
    }
  }
  const inputTest1 = useFocusBlur(200);
  const inputTest2 = useFocusBlur(300);
  const inputTest3 = useFocusBlur(400);
  return (
    <div>
      <div>
        <input placeholder="입력1" {...inputTest1} style={{width: 100, height: 40, background: "lightgray", border: 0, transition: "0.2s ease-in-out"}} />
      </div>
      <div>
        <input placeholder="입력2" {...inputTest2} style={{width: 100, height: 40, background: "lightgray", border: 0, transition: "0.2s ease-in-out"}} />
      </div>
      <div>
        <input placeholder="입력3" {...inputTest3} style={{width: 100, height: 40, background: "lightgray", border: 0, transition: "0.2s ease-in-out"}} />
      </div>
    </div>
  );
}

export default useFocusBlur;