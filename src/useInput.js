
import { useState } from "react"

function useInput() {
  const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
      console.log(e.target)
      const { target : { value } } = e;
      let willUpdate = true;
      if(typeof validator === "function"){
        willUpdate = validator(value);
      }
      if(willUpdate){
        setValue(value);
      }
    }
    return { value, onChange }
  }

  const maxLen = value => value.length <= 10;
  // const maxLen = value => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default useInput;
