import { ListContainer } from '../../styles/List/List.style';
import Item from '../../components/Item/Item';
import { ItemType } from '../../../data/@types/Item/Item.type';
import { useListItems } from '../../../data/hooks/UseListItems/UseLisItems';
 
 
interface ListProps {
    filteredItems: ItemType[] | undefined;
    handleDeleteFilteredItem?: (index: number) => void;
}
 
const List = ({ filteredItems, handleDeleteFilteredItem }: ListProps) => {
    const { handleCheck, handleEdit } = useListItems();
 
    return (
        <ListContainer>
            {filteredItems?.length &&
                filteredItems.map((item, index) => (
                    <Item
                        key={index}
                        ItemTitle={item.ItemTitle}
                        ItemData={item.ItemData}
                        isChecked={item.isChecked}
                        onDelete={() => handleDeleteFilteredItem && handleDeleteFilteredItem(index)} // Usando a função handleDeleteFilteredItem
                        onCheck={(isChecked) => handleCheck(index, isChecked)}
                        onEditSubmit={(editedTitle) => handleEdit(index, { ...item, ItemTitle: editedTitle })}
                    />
                ))}
        </ListContainer>
    );
};
 
export default List;
 