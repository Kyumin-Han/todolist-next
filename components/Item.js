
export default function Item({ todoList, deleteItem }) {
    const checking = (event) => {
        const { style } = event.target.nextSibling;
        const { checked } = event.target;
        style.color = checked ? "gray" : null;
        style.textDecoration = checked ? "line-through" : null;
    }
    return todoList.map((todo, index) => (
        <div key={todo.id}>
            <input type="checkbox" 
            id={index}
            onClick={checking}/>
            <label htmlFor={index}>
                {todo.value}
            </label>
            <button onClick={() => deleteItem(index)}>삭제</button>
        </div>
    ))
}