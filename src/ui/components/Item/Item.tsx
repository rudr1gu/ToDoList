import  { useState, useEffect } from "react";
import { ItemContainer, ItemData, ItemText } from "../../styles/Item/Item.style";
import ActionButton from "../ActionButton/ActionButton";
import { ItemType } from "../../../data/@types/Item/Item.type";
import { formatDate } from "../../../data/services/FormatDate/FormatDate.services";
import useCheck from "../../../data/hooks/useCheck/useCheck";


const Item = (props: ItemType) => {
    const { checked, handleChangeCheck } = useCheck(props);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(props.ItemTitle);

    useEffect(() => {
        setEditedTitle(props.ItemTitle);
    }, [props.ItemTitle]);

    const handleToggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedTitle(e.target.value);
    };

    const handleEditSubmit = () => {
        props.onEditSubmit(editedTitle);
        setIsEditing(false);  
    };

    return (
        <ItemContainer className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
                <input type="checkbox" title="Check" checked={checked} onChange={handleChangeCheck} />
                {isEditing ? (
                    <input type="text" value={editedTitle} onChange={handleTitleChange} />
                ) : (
                    <div className="d-flex flex-column justify-content-center" style={{ textDecoration: checked ? 'line-through' : 'none' }}>
                        <ItemText>{editedTitle}</ItemText>
                        <ItemData>{formatDate(props.ItemData)}</ItemData>
                    </div>
                )}
            </div>
            <ActionButton onDelete={props.onDelete} onEdit={handleToggleEdit} isEditing={isEditing} onEditSubmit={handleEditSubmit} />
        </ItemContainer>
    );
};

export default Item;