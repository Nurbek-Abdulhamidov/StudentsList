import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState([]);
  const [id, setId] = useState(null);

  const getUsers = (id) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/users${id ? `/${id}` : ""}`
    ).then((res) => res.json());
  };

  useEffect(() => {
    getUsers().then((res) => setStudents(res));
  }, []);

  const getInfo = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setSelected(res);
      });
  };

  return (
    <div>
      <h1>Students List</h1>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          {students.map((value, index) => (
            <div key={index}>
              <h1>
                Name : {value.id} {value.name}
              </h1>
              <button onClick={() => getInfo(value.id)}>get info</button>
            </div>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <div>
            <h1>Name : {selected?.name}</h1>
            <h1>User name : {selected?.username}</h1>
            <h1>Email : {selected?.email}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fetch;
