import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors';
const app = express()
import userModel from './model/user.js'
import User from './model/user.js';
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://api:api@cluster0.lkjikrn.mongodb.net/userdata?retryWrites=true&w=majority",{
  useNewUrlParser: true,
})
const port = 8080;

app.post('/insert', async(req, res) => {
  try{  
    const id= req.body.number;
    const name= req.body.name;
    const address= req.body.address;
    const user = new userModel(
      {
        id:id, 
        name:name, 
        address: address
      }
    )
    await user.save()
    console.log("saved");
    res.send("done")
  }catch (err){
    console.log(err);
  }
})
app.get('/read', async(req, res) => {
  try{  
    User.find({} ,(err, result) => {
      if(err){
        res.send(err)
      }
      res.send(result)
    })
  }catch (err){
    console.log(err);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})