/* eslint-disable react/prop-types */
import "./AddTodo.css";
import uuid from "react-uuid";

const AddTodo = ({ allData, setAllData }) => {
  const inputHandler = (e) => setAllData({ ...allData, input: e.target.value });

  const submitHandler = (e) => {
    e.preventDefault();
    setAllData({
      ...allData,
      input: "",
      todoArr: [
        ...allData.todoArr,
        { id: uuid(), todo: allData.input, state: false },
      ],
    });
  };

  return (
    <section className="AddTodo">
      <form onSubmit={submitHandler}>
        <input type="text" value={allData.input} onChange={inputHandler} />
        <button>add</button>
      </form>
    </section>
  );
};

export default AddTodo;
