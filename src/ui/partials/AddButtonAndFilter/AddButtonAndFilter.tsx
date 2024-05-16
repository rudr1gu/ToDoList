import { useState, useEffect } from 'react';
import Filter from '../../components/Filter/Filter';
import { AddButtonAndFilterContainer } from '../../styles/AddButtonAndFilter/AddButtonAndFilter.style';
import { Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import useAddButtonAndFilter from '../../../data/hooks/useAddButtonAndFilter/useAddButtonAndFilter';
import { ItemType } from '../../../data/@types/Item/Item.type';
import List from '../List/List';
 
const AddButtonAndFilter = () => {
    const { modal, titleRef, HandleOpenModal, HandleOnSubmit } = useAddButtonAndFilter();
    const [items, setItems] = useState<ItemType[]>([]);
    const [selectedFilter, setSelectedFilter] = useState<string>('Todos');
    const [filteredItems, setFilteredItems] = useState<ItemType[]>([]);
 
    useEffect(() => {
        const storedItems = localStorage.getItem('ListItems');
        if (storedItems) {
            const parsedItems: ItemType[] = JSON.parse(storedItems);
            setItems(parsedItems);
        }
    }, []);
 
    useEffect(() => {
        const filterItems = () => {
            switch (selectedFilter) {
                case 'Pendentes':
                    return items.filter(item => !item.isChecked);
                case 'Concluídos':
                    return items.filter(item => item.isChecked);
                case 'Todos':
                default:
                    return items;
            }
        };
 
        setFilteredItems(filterItems());
    }, [items, selectedFilter]);
 
    const handleDeleteFilteredItem = (index: number) => {
        const updatedItems = [...filteredItems];
        updatedItems.splice(index, 1);
        setFilteredItems(updatedItems);
        localStorage.setItem("ListItems", JSON.stringify(updatedItems));
    };
 
    return (
        <>
            <AddButtonAndFilterContainer className="w-100 d-flex align-items-center justify-content-between">
                {!modal ? (
                    <Button onClick={HandleOpenModal}>Adicionar Tarefa</Button>
                ) : (
                    <Button disabled>Adicionar Tarefa</Button>
                )}
                <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
            </AddButtonAndFilterContainer>
            {modal && (
               <form className="w-100 pt-2 pb-2 d-flex form-group" onSubmit={(e) => HandleOnSubmit(e, setItems)}>
               <input ref={titleRef} type="text" className="w-100 form-control" />
               <Button type="submit" className="mx-2">
                   <FaPlus />
               </Button>
           </form>
            )}
            <List filteredItems={filteredItems} handleDeleteFilteredItem={handleDeleteFilteredItem} />
        </>
    );
};
 
export default AddButtonAndFilter;