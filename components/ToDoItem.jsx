import { useEffect, useRef, useState } from "react";

const ToDoItem = ({ todoItem, todoList, setTodoList, index }) => {
  const [edited, setEdited] = useState(false);
  const [newText, setNewText] = useState(todoItem.text);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (edited) {
      editInputRef.current.focus();
    }
  }, [edited]);

  const onClickDeleteButton = (id) => {
    if (window.confirm("할일을 지웁니다")) {
      const nextTodoList = todoList.filter((item, index) => id !== index);

      setTodoList(nextTodoList);
    }
  };

  const onChangeEditInput = (e) => {
    setNewText(e.target.value);
  };

  const onChangeCheckbox = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }));

    setTodoList(nextTodoList);
  };

  const onClickEditButton = () => {
    setEdited(true);
  };

  const onClickSubmitButton = (e) => {
    e.preventDefault();
    const nextTodoList = todoList.map((item) => ({
      ...item,
      text: item.id === todoItem.id ? newText : item.text,
    }));
    setTodoList(nextTodoList);

    setEdited(false);
  };

  return (
    <li>
      <form onSubmit={onClickSubmitButton}>
        <input
          type="checkbox"
          id={todoItem.id}
          checked={todoItem.checked}
          onChange={onChangeCheckbox}
        />
        {edited ? (
          <input
            type="text"
            value={newText}
            checked={todoItem.checked}
            ref={editInputRef}
            onChange={onChangeEditInput}
          />
        ) : // 수정 할 시 초기 생성할 때 선택했던 파일이 선택 되어 있게 하고
        // 새로운 파일을 선택하면 갱신 아니면 그대로
        todoItem.fileUrl ? (
          <div>
            <label htmlFor={todoItem.id}>{todoItem.text}</label>
            <img src={todoItem.fileUrl} />
          </div>
        ) : (
          <label htmlFor={todoItem.id}>{todoItem.text}</label>
        )}
      </form>

      {!todoItem.checked ? (
        edited ? (
          <button type="submit" onClick={onClickSubmitButton}>
            확인
          </button>
        ) : (
          <button type="button" onClick={onClickEditButton}>
            수정
          </button>
        )
      ) : null}

      <button
        type="button"
        onClick={() => {
          onClickDeleteButton(index);
        }}
      >
        삭제
      </button>
    </li>
  );
};

// input 태그 form태그 감싸기 (완)
// image 올리기 todoList의 글이랑 이미지 같이 올릴 수 있게 수정
// tailwind 적용하기

export default ToDoItem;
