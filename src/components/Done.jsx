/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { FaTrashCan, FaRotateLeft } from "react-icons/fa6";

const Done = ({ allData, setAllData }) => {
  const doneHandler = (e) => {
    const indexOfTodo = allData.todoArr.findIndex(
      (todoObj) => todoObj.id === e.target.id
    );
    const currentTodoObj = allData.todoArr.find(
      (todoObj) => todoObj.id === e.target.id
    );

    allData.todoArr.splice(indexOfTodo, 1);
    setAllData({
      ...allData,
      todoArr: [...allData.todoArr, { ...currentTodoObj, state: false }],
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
        if (todoObj.state) {
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
                className="btn-back"
                onClick={doneHandler}
                id={todoObj.id}
              >
                <FaRotateLeft />
              </button>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Done;
