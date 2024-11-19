// import { todo } from "../../../backend/db";

export default function Todos({ todos }) {
  return (
    <>
      {console.log(todos.map((e)=> console.log(e)), "todo")}
      {todos &&
        todos.length > 0 &&
        todos.map((e,index) => {
          return (
            <div key={index}>
              <h1>{e.title}</h1>
              <h2>{e.description}</h2>
              <button>
                {e.status ? "Completed" : "Mark as completed"}
              </button>
            </div>
          );
        })}
    </>
  );
}
