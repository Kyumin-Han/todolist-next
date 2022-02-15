import { useState } from "react";

import InputBox from "../components/InputBox";

import ToDoItemList from "../components/ToDoItemList";

const Home = () => {
  const [todoList, setTodoList] = useState([]);
  return (
    <div>
      <InputBox todoList={todoList} setTodoList={setTodoList} />{" "}
      {/* 할 일 Item 리스트 */}
      <ToDoItemList
        title={"할 일"}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={false}
      />
      <ToDoItemList
        title={"완료한 항목"}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={true}
      />
    </div>
  );
};
export default Home;
