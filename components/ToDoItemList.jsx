import React from 'react';
import ToDoItem from './ToDoItem';

const TodoItemList = ({ title, todoList, setTodoList, checkedList }) => (
    <div>
        <p>{title}</p>
        <ul>
            {
                todoList && todoList.map((todoItem, index) => {

                    if(checkedList !== todoItem.checked) return null;

                    return (
                        <ToDoItem 
                            key={todoItem.id}
                            todoItem={todoItem}
                            todoList={todoList}
                            setTodoList={setTodoList}
                            index={index}
                        />
                    )
                    
                })
            }
        </ul>
    </div>
);

export default TodoItemList;