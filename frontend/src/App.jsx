import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";


function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("/api/users")
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.log(error)
      });
  },[]);

  return (
    <>
      <h1>Welcome Home</h1>
      <h3>Total users : {users.length}</h3>
      {
        users.map((user, index) => {
          console.log(user) 
          return (
            <div key={user.id}>
              <h1>Name : {user.name}</h1>
              <h2>Age : {user.age}</h2>
            </div>
          )
        })
      }
      
    </>
  );
}

export default App;
