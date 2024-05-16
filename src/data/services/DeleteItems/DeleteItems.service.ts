import { ItemType } from "../../@types/Item/Item.type";
 
export const handleDeleteFilteredItem = (index: number, filteredItems: ItemType[], setFilteredItems: (updatedItems: ItemType[]) => void) => {
    const updatedItems = [...filteredItems];
    updatedItems.splice(index, 1);
    setFilteredItems(updatedItems);
    localStorage.setItem("ListItems", JSON.stringify(updatedItems));
};
