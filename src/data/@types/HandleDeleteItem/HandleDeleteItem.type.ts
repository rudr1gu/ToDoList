import { ItemType } from "../Item/Item.type"

export type HandleDeleteItemType = {
    (index: number, items: ItemType[], setItems: (updatedItems: ItemType[]) => void): void;
}