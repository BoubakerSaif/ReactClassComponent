import { useState } from "react";
import "./App.css";
import Profile from "./Components/Profile";
import products from "./Product";
function App() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("Ali");
  const [userInfo, setUserInfo] = useState({
    name: "Ali",
    age: 20,
    Profession: "Student",
  });

  console.log(products);
  const showHandler = () => {
    setShow(!show);
  };
  return (
    <div className="App">
      Hello
      <Profile />
    </div>
  );
}

export default App;
