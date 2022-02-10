import { useState } from "react";

export default function Form({pushTodo}) {
  const [newTodo, setNewTodo] = useState("");

  const changeInputText = (e) => {
    setNewTodo(e.target.value);
  };

  const submitItem = (e) => {
    e.preventDefault();
    pushTodo(newTodo);
    setNewTodo("");
  };

  return (
    
    <form onSubmit={submitItem} className="Form">
    <input
        autoFocus
        placeholder="할 일을 입력하세요"
        value={newTodo}
        onChange={changeInputText}
    />
    <button
        type="submit"
    >
        추가
    </button>
    </form>
    
  );
}