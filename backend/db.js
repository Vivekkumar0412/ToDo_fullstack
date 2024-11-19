const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/todoFullStack")
mongoose.connect("mongodb://127.0.0.1:27017/todoFullStack")
// const { string } = require("zod");

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

const todo = mongoose.model("todo",todoSchema);

module.exports = {todo};