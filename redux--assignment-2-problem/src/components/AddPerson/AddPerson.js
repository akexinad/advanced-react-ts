import React, { useState } from "react";

import "./AddPerson.css";

const addPerson = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();

  const _nameChangeHandler = (e) => setName(e.target.value);
  const _ageChangeHandler = (e) => setAge(e.target.value);

  return (
    <div className="AddPerson">
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={_nameChangeHandler}
      />
      <input
        type="number"
        placeholder="age"
        value={age}
        onChange={_ageChangeHandler}
      />
      <button onClick={() => props.personAdded({ name, age })}>
        Add Person
      </button>
    </div>
  );
};

export default addPerson;
