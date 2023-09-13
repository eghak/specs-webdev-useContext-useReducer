import React, { useState, useContext } from "react";
import GlobalContext from "../state/GlobalContext";

function Form() {
  const [newName, setNewName] = useState("");
  const { dispatch } = useContext(GlobalContext);

  function changeName(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("submit");
    dispatch({ type: "CHANGE_NAME", payload: newName });
    setNewName("");
  }

  function increase() {
    // console.log("+");
    dispatch({ type: "INCREASE" });
  }

  function decrease() {
    // console.log("-");
    dispatch({ type: "DECREASE" });
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <h2>Change Name</h2>
        <input type="text" onChange={changeName} value={newName} />
        <button>Change</button>
      </form>
      <div>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}

export default Form;
