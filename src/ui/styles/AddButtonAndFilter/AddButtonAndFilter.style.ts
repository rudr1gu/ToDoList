import styled from "styled-components";


export const AddButtonAndFilterContainer = styled.div`
  margin-bottom: 10px;
  button {
    background: #6270ef;
    transition: background 0.5s ease;

    &:hover {
      background: #4b57ab;
    }
  }

  select {
    background: #cdccdf;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;

    &:focus {
      outline: none;
    }
  }
`;