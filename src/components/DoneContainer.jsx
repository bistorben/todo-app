/* eslint-disable react/prop-types */
import Done from "./Done";
import "./DoneContainer.css";

const DoneContainer = ({ allData, setAllData }) => {
  return (
    <section className="DoneContainer">
      <h2>Done Container</h2>
      <Done allData={allData} setAllData={setAllData} />
    </section>
  );
};

export default DoneContainer;
