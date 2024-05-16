import { handleItemCheckType } from "../../@types/HandleItemCheck/HandleItemCheck.type";
 
export const handleItemCheck: handleItemCheckType = (index, isChecked, items, setItems) => {
    const updatedItems = [...items];
    updatedItems[index].isChecked = isChecked;
    setItems(updatedItems);
    localStorage.setItem("ListItems", JSON.stringify(updatedItems));
};