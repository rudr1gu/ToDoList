 
import { ActionButtonProps } from "../../../data/@types/ActionButton/ActionButton.type";
import { ActionButtonContainer } from "../../styles/ActionButton/ActionButton.style";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const ActionButton = ({ onDelete, onEdit, isEditing, onEditSubmit }: ActionButtonProps) => {
    return (
        <ActionButtonContainer className="d-flex justify-content-around">
            {isEditing ? (
                <button title="Submit Edit" onClick={onEditSubmit}>
                    Submit
                </button>
            ) : (
                <button title="Edit Button" onClick={onEdit}>
                    <FaEdit />
                </button>
            )}
            <button title="Delete Button" onClick={onDelete}>
                <FaRegTrashAlt />
            </button>
        </ActionButtonContainer>
    );
};

export default ActionButton;