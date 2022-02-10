import { useState } from 'react';
import Insert from './Form';
import Item from './Item';


export default function Todo() {
    const [id, setId] = useState(0);
    const [todos, setTodos] = useState([]);

    const addList = (value) => {
        const lists = todos;
        const item = { id, value, stat };
        setId((current) => current + 1);
        lists.push(item);
        setTodos(lists);
    }

    const deleteItem = (index) => {
        const lists = todos.filter((item, idx) => index !== idx);
        setTodos(lists);
    }

    return (
        <div>
            <Insert pushTodo={addList}/>
            <Item todoList={todos} deleteItem={deleteItem}/>
        </div>
    )
}