import { useState, useRef, useEffect } from "react";

const InputBox = ({ todoList, setTodoList }) => {
  const [text, setText] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onChangeFile = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;

      setFileUrl(previewImgUrl);
    };
  };

  const onClickAddButton = (e) => {
    e.preventDefault();
    const nextTodoList = todoList.concat({
      id: todoList.length,
      text,
      checked: false,
      fileUrl: fileUrl ? fileUrl : "",
    });
    setTodoList(nextTodoList);

    setText("");
    inputRef.current.focus();
  };

  return (
    <div className="flex justify-center items-center">
      <h1 className="text-5xl">TodoList</h1>
      <form onSubmit={onClickAddButton}>
        <input
          className="w-full border-gray-300 px-2 transition-all border-blue rounded-sm m-auto"
          type="text"
          placeholder="할 일을 입력해주세요"
          value={text}
          ref={inputRef}
          onChange={onChangeInput}
        />
        <input
          className="w-full border-gray-300 px-2 transition-all border-blue rounded-sm m-auto"
          type="file"
          onChange={onChangeFile}
        />
      </form>
      <button
        type="submit"
        onClick={onClickAddButton}
        className="shadow w-32 border-blue-600 border-2 rounded-full focus:outline-none focus:border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white m-auto"
      >
        저장
      </button>
    </div>
  );
};
export default InputBox;
