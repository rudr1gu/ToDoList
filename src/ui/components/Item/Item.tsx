import { ItemContainer, ItemData, ItemText } from "../../styles/Item/Item.style";
import ActionButton from "../ActionButton/ActionButton";
 
const Item = () => {
    return (
        <ItemContainer className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
                <input type="checkbox" title="Check" />
                <input type="text"/>
                <div className="d-flex flex-column justify-content-center" style={{ textDecoration: checked ? 'line-through' : 'none' }}>
                    <ItemText></ItemText>
                    <ItemData></ItemData>
                </div>
 
            </div>
            <ActionButton/>
        </ItemContainer>
    );
};
 
export default Item;