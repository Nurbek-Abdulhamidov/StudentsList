import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Fetch = () => {
  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState([]);

  const getUsers = (id) => {
    return fetch(`https://houzing-app.herokuapp.com/api/v1/houses`).then(
      (res) => res.json()
    );
  };

  useEffect(() => {
    // getUsers().then((res) => console.log (res));
  }, []);

  const getInfo = (id) => {
    // getUsers(id).then((res) => setSelected(res));
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        {students.map((value, index) => (
          <div>
            <h1 key={index}>
              {value.id}
              {value.name}
            </h1>
            <button onClick={() => getInfo(value.id)}>getInfo</button>
          </div>
        ))}
      </div>
      <div style={{ flex: 1 }}>
        {selected.length === "" ? (
          <p>loading..</p>
        ) : (
          <h1>
            <h5>Name : {selected.name}</h5>
            <h5>USER Name :{selected.username} </h5>
            <h5>Email : {selected.email}</h5>
          </h1>
        )}
      </div>
    </div>
  );
};

export default Fetch;
