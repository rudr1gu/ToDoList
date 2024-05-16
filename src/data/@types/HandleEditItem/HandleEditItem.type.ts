import { ItemType } from "../Item/Item.type";


export type HandleEditItemType = (
    index: number,
    newItem: ItemType,
    items: ItemType[],
    setItems: React.Dispatch<React.SetStateAction<ItemType[]>>
) => void;
