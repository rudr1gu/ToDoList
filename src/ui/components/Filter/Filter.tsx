import  { ChangeEvent } from 'react';
 
interface FilterProps {
    selectedFilter: string;
    setSelectedFilter: (filter: string) => void;
}
 
const Filter = ({ selectedFilter, setSelectedFilter }: FilterProps) => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedFilter(event.target.value);
    };
 
    return (
        <select title="filter" value={selectedFilter} onChange={handleChange}>
            <option value="Todos">Todos</option>
            <option value="Concluídos">Concluídos</option>
            <option value="Pendentes">Pendentes</option>
        </select>
    );
};
 
export default Filter;