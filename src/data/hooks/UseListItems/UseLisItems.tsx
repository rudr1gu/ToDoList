import { useState, useEffect } from 'react';
import { ItemType } from "../../../data/@types/Item/Item.type";
import { handleItemCheck } from '../../services/ItemCheck/Item.service';
import { handleDeleteFilteredItem } from '../../services/DeleteItems/DeleteItems.service';
import { handleEditItem } from '../EditItem/EditItem.service'


export const useListItems = () => {
    const [items, setItems] = useState<ItemType[]>([]);

    useEffect(() => {
        const storedItems = localStorage.getItem("ListItems");
        if (storedItems) {
            const parsedItems: ItemType[] = JSON.parse(storedItems);
            setItems(parsedItems.map(item => ({
                ...item,
                isChecked: item.isChecked || false
            })));
        }
    }, []);

    const handleCheck = (index: number, isChecked: boolean) => {
        setItems(prevItems => {
            const updatedItems = [...prevItems];
            updatedItems[index].isChecked = isChecked;
            return updatedItems;
        });
        handleItemCheck(index, isChecked, items, setItems);
    };

    const handleDelete = (index: number) => {
        handleDeleteFilteredItem(index, items, setItems);
    };

    const handleEdit = (index: number, newItem: ItemType) => {  
        handleEditItem(index, newItem, items, setItems); 
    };

    return {
        items,
        handleCheck,
        handleDelete,
        handleEdit
    };
};