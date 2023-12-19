import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toysArray, setToysArray] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy){
    setToysArray([...toysArray, newToy])
  } 

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((res) => res.json())
    .then(setToysArray)},[]
  )

  return ( 
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toysArray={toysArray}/>
    </>
  );
}

export default App;
