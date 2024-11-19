import { useEffect, useState } from "react";
import CreateTodo from "../src/components/CreateTodo";
import Todos from "./components/Todos";
import Test from "./components/Test";
function App() {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/todo").then(async (res) => {
      let data = await res.json();
      console.log("data");
      console.log(data, "data");
      setTodo(data.data);
    });
  }, []);
  return (
    <>
      <h1>Vivek is a billionare</h1>
      <CreateTodo />
      {/* <Todos todos = {[{  id : 1,title: "Vivek is a billionare",description : "Very Soon", status : false} ]}/> */}
      <Todos todos={todos} />
      <Test />
    </>
  );
}

export default App;
