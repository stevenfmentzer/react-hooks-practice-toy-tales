import { React, useState } from "react";

function ToyForm( { onAddToy }) {

  let initObj = {
    "name": "",
    "image": "",
    "likes": 0
    }

  const [formData, setFormData] = useState(initObj)


  function handleChange(event){
    const {name, value} = event.target
    setFormData({
      ...formData, [name] : value
  })}

  function handleSubmit(event){
    event.preventDefault();
    console.log("SUBMIT")

    fetch("http://localhost:3001/toys",{
      method : "POST",
      headers : {
        "content-Type" : "application/json"
      },
      body : JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => onAddToy(data))
  }


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          valye={formData.name}
        />
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
