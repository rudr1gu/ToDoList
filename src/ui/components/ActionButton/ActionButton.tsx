import { ActionButtonContainer } from "../../styles/ActionButton/ActionButton.style";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
 
const ActionButton = () => {
    return (
        <ActionButtonContainer className="d-flex justify-content-around">
            <button title="Submit Edit">
                Submit
            </button>
            <button title="Edit Button">
                <FaEdit />
            </button>
            <button title="Delete Button" >
                <FaRegTrashAlt />
            </button>
        </ActionButtonContainer>
    );
};
 
export default ActionButton;