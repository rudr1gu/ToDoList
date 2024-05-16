import { useState, useRef, FormEvent, RefObject } from 'react';
 
const useAddButtonAndFilter = () => {
    const [modal, setModal] = useState<boolean>(false);
    const titleRef: RefObject<HTMLInputElement> = useRef(null);
 
    const HandleOpenModal = () => {
        setModal(true);
    };
 
    const HandleOnSubmit = (e: FormEvent, setItems: React.Dispatch<React.SetStateAction<any[]>>) => {
        e.preventDefault();
        const title = titleRef.current?.value;
        if (!title) {
            alert("Por favor, insira um título para a tarefa.");
            return;
        }
        const date = Date.now();
        const checked = false;
        const newItem = {
            ItemTitle: title,
            ItemData: date,
            isChecked: checked
        };
        const existingItems = JSON.parse(localStorage.getItem("ListItems") || "[]");
        const updatedItems = [...existingItems, newItem];
        localStorage.setItem("ListItems", JSON.stringify(updatedItems));
        setItems(updatedItems);
        titleRef.current!.value = "";
        setModal(false);
    };
 
    return {
        modal,
        titleRef,
        HandleOpenModal,
        HandleOnSubmit
    };
};
 
export default useAddButtonAndFilter;