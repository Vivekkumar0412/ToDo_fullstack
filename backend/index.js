const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")
const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:8080/todoFullStack")
const {todo}= require("./db");
const { createTodo, updateTodo } = require("./types");
app.use(express.json());
app.use(bodyParser.json());
app.use(cors())
const PORT = 8080;
// app.get("/",(req,res)=>{
//     try {
//         const data = req.body;
//         if(!data){
//             res.send("Data is empty")
//         }else{
//             res.send("hi i am home page")
//         }
//     } catch (error) {
//         res.send(error);
//     }
// });

app.post("/todo", async (req, res) => {
  try {
    const data = req.body;
    const realData = createTodo.safeParse(data);
    if (!realData.success) {
      res.status(400).json({ msg: "You send a wrong data" });
    } else {
        console.log(req.body)
    //   await todoModel.create({
    //     title: realData?.title,
    //     description: realData?.description,
    //     completed : false
    //   });
    const todoData = new todo({
        title: realData.data.title,
        description: realData.data.description,
        completed: false
      });

      let finalData = await todoData.save();
      res.status(200).json({ msg: "to do created", data: finalData });
    }
  } catch (error) {
    res.status(500).json({error :error.message});
  }
});
app.get("/todo", async (req, res) => {
    const data = await todo.find();
    if(!data){
        res.status(400).json("no data found")
    }else{
        res.status(200).json({msg : "All the todos found", data : data, length : data.length})
    }
});
app.put("/todos", async (req, res) => {
  try {
    const data = req.body;
    const realData = updateTodo.safeParse(data);
    if (!realData.success) {
      res.status(400).json("Wrong id");
    }
    await todoModel.update({
        _id : req.body.id
    },{completed : true})
    res.status(200).json({msg : "Todo updated", data : realData});
  } catch (error) {
    res.status(200).json({msg : "Error occured"})
  }
});

app.listen(PORT, () => {
  console.log(`app is live on http://localhost:${PORT}`);
});
