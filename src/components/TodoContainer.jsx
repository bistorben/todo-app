/* eslint-disable react/prop-types */
import Todo from "./Todo";
import "./TodoContainer.css";

const TodoContainer = ({ allData, setAllData }) => {
  return (
    <section className="TodoContainer">
      <h2>Todo Container</h2>
      <Todo allData={allData} setAllData={setAllData} />
    </section>
  );
};

export default TodoContainer;
