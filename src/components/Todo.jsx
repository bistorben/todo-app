/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { FaTrashCan, FaCheck } from "react-icons/fa6";

const Todo = ({ allData, setAllData }) => {
  const todoHandler = (e) => {
    console.log(e.target.id);
    const indexOfTodo = allData.todoArr.findIndex(
      (todoObj) => todoObj.id === e.target.id
    );

    const currentTodoObj = allData.todoArr.find(
      (todoObj) => todoObj.id === e.target.id
    );
    console.log(currentTodoObj);
    allData.todoArr.splice(indexOfTodo, 1);
    setAllData({
      ...allData,
      todoArr: [...allData.todoArr, { ...currentTodoObj, state: true }],
    });
  };

  const deleteHandler = (e) => {
    const indexOfTodo = allData.todoArr.findIndex(
      (todoObj) => todoObj.id === e.target.id
    );
    allData.todoArr.splice(indexOfTodo, 1);
    setAllData({
      ...allData,
    });
  };

  return (
    <ul>
      {allData.todoArr.map((todoObj) => {
        if (!todoObj.state) {
          return (
            <li key={todoObj.id}>
              {todoObj.todo}
              <button
                className="btn-delete"
                onClick={deleteHandler}
                id={todoObj.id}
              >
                <FaTrashCan />
              </button>
              <button
                className="btn-done"
                onClick={todoHandler}
                id={todoObj.id}
              >
                <FaCheck />
              </button>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Todo;
