import styled from "styled-components";

export const ItemContainer = styled.div`
  background: #ffffff;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 15px;
  
  input[type="checkbox"] {
    width: 20px;
    margin-right: 10px;
    &:checked,
    &:hover {
      background: #717ae8;
    }
  }
`;

export const ItemText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;
`;

export const ItemData = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
`;
