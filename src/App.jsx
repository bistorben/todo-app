import { useState } from "react";

import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoContainer from "./components/TodoContainer";
import DoneContainer from "./components/DoneContainer";

function App() {
  const [allData, setAllData] = useState({
    input: "",
    todoArr: [],
  });

  return (
    <main>
      <AddTodo allData={allData} setAllData={setAllData} />
      <TodoContainer allData={allData} setAllData={setAllData} />
      <DoneContainer allData={allData} setAllData={setAllData} />
    </main>
  );
}

export default App;
