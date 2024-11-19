import { useState } from "react";

export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState("false");
  return (
    <>
      <label
        style={{
          border: "2px solid black",
          padding: "10px 30px",
          backgroundColor: "red",
          color: "white",
          borderRadius: "10px",
          margin: "2px 10px",
        }}
        htmlFor="title"
      >
        Title
      </label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "10px 50px" }}
        type="text"
        placeholder="Title"
        id="title"
      />
      <label
        style={{
          border: "2px solid black",
          padding: "10px 30px",
          backgroundColor: "red",
          color: "white",
          borderRadius: "10px",
          margin: "2px 10px",
        }}
        htmlFor="Description"
      >
        Description
      </label>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: "10px 50px" }}
        type="text"
        placeholder="Description"
        id="Description"
      />
      <button
        onClick={() => {
          fetch("http://localhost:8080/todo", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description,
                // completed: completed,
              }),
            headers :{
                "content-Type" : "application/json"
            }
          });
        }}
      >
        Add Todo
      </button>
    </>
  );
}
