import { ItemType } from "../../@types/Item/Item.type";

export type handleItemCheckType = {
    (index: number, isChecked: boolean, items: ItemType[], setItems: (updatedItems: ItemType[]) => void): void;
}