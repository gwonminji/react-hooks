
function usePreventLeave() {
    const usePreventLeave = () => {
    const listener = (e) => {
        e.preventDefault();
        e.returnValue = "";
    }
    const enablePrevent = () => window.addEventListener("beforeunload", listener)
    const disablePrevent = () => window.removeEventListener("beforeunload", listener)
    return {
        enablePrevent,
        disablePrevent
    }
    }
    const {enablePrevent, disablePrevent} = usePreventLeave()
    return (
    <div>
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>UnProtect</button>
    </div>
    );
}

export default usePreventLeave;