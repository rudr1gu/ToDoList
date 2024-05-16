import { Container } from "react-bootstrap";
import { TodoListContainer } from "../styles/TodoList/TodoList.style";
import AddButtonAndFilter from "../partials/AddButtonAndFilter/AddButtonAndFilter";

import List from "../partials/List/List";


const TodoList = ()=>{
    return(
        <TodoListContainer className="d-flex flex-column justify-content-center align-items-center">
        <Container>
            <AddButtonAndFilter />
           <List filteredItems={undefined}/>
        </Container>
        </TodoListContainer>
    )
}

export default TodoList;