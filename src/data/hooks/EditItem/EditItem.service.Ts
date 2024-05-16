import { HandleEditItemType } from "../../@types/HandleEditItem/HandleEditItem.type";
 
 
export const handleEditItem: HandleEditItemType = (index, newItem, items, setItems) => {
    const updatedItems = [...items];
    updatedItems[index] = newItem;
    setItems(updatedItems);
    localStorage.setItem("ListItems", JSON.stringify(updatedItems));
};