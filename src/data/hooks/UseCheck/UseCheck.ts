import { useState } from 'react';
import { ItemType } from "../../../data/@types/Item/Item.type";
import { useCheckType } from '../../@types/useCheck/useCheck.type';
 
 
const useCheck = (props: ItemType): useCheckType => {
    const [checked, setChecked] = useState<boolean>(props.isChecked || false);
 
    const handleChangeCheck = () => {
        const newCheckedState = !checked;
        setChecked(newCheckedState);
        props.onCheck(newCheckedState);
    };
 
    return {
        checked,
        handleChangeCheck
    };
};
 
export default useCheck;