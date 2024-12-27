// const express = require("express")
// const app = express()
// const mongoose = require("mongoose")
// const port = 1200

// const cors=require("cors")
// const adminmodel = require("./models/admin")

// app.use(express.json())
// app.use(cors())

// mongoose.connect("mongodb://localhost:27017/formtask")
// .then(()=>{
//     console.log("mongodb connected succesfully");
//     })
// .catch(()=>{
//     console.log("mongodb connection error");
//     })
// //post rqst handler

// app.post('/userpost', async (req,res)=>{
//     try{
//    const{name,age}=req.body;
//    const newuser = await adminmodel.create({name,age})
//    res.status(201).json(newuser);
//     }
//     catch(error){
//         res.status(400).json({error:error.message});
//     }
// })

// //get rqst handler

// app.get("/userget",async(req,res)=>{
//     try{
//         const user=await adminmodel.find()
//         res.json(user);
//     }catch(error){
//         res.status(500).json({error:error.messsage});
//     }
// });

// app.listen(port,()=>{
//     console.log(`server running on port:${port}`);
    
// })

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 1200;

const cors = require("cors");
const adminmodel = require("./models/admin");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/formtask")
  .then(() => {
    console.log("mongodb connected successfully");
  })
  .catch(() => {
    console.log("mongodb connection error");
  });

// POST request handler
app.post('/userpost', async (req, res) => {
  try {
    const { name, age } = req.body;
    const newuser = await adminmodel.create({ name, age });
    res.status(201).json(newuser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET request handler to fetch all users
app.get("/userget", async (req, res) => {
  try {
    const users = await adminmodel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET request handler to fetch a user by ID
app.get("/userget/:id", async (req, res) => {
  try {
    const user = await adminmodel.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT request handler to update a user by ID
app.put("/userupdate/:id", async (req, res) => {
  try {
    const updatedUser = await adminmodel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE request handler to remove a user by ID
app.delete("/userdelete/:id", async (req, res) => {
  try {
    const deletedUser = await adminmodel.findByIdAndDelete(req.params.id);
    if (deletedUser) {
      res.json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
