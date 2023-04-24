function useConfirm() {
    const useConfirm = (msg = "", onConfirm, onReset) => {
        const confirmAction = () => {
        if(window.confirm(msg)){
            onConfirm();
        }else{
            onReset();
        }
        }
        return confirmAction;
    }
    const deleteWorld = () => console.log("delete");
    const resetWorld = () => console.log("reset");
    const confirmDelete = useConfirm("sure?", deleteWorld, resetWorld);
    return (
        <div>
        <button onClick={confirmDelete}>delete the world</button>
        </div>
    );
}

export default useConfirm;