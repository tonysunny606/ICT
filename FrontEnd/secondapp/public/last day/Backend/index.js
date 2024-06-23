//1.importing the express
const express =require('express')
const employeeModel = require("./model")
const cors =require('cors')

//2. intialization
const app=new express()

//middelware || parsing the parameter
app.use(express.urlencoded({ extended:true}))
app.use(express.json())
app.use(cors());


//3.API CREATION
app.get('/',(req,res)=>{
    res.send("The message from api")
})
//trail api
app.get('/trail',(req,res)=>{
    res.send("This is a trial message")
})
app.post('/create',async(req,res)=>{
    var result = await new employeeModel(req.body)
    result.save()
    res.send("Data addes")
})
//API VIEWING DATA
app.get('/view',async(req,res)=>{
    var data = await employeeModel.find()
    res.json(data)
    console.log(data)
})
//API DELETING DATA
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params)
    let id=req.params.id
    await employeeModel.findByIdAndDelete(id)
    res.send(" Data Deleted")
})
//APP UPDATE DATA
app.put('/edit/:id',async(req,res)=>{
    let id=req.params.id
    await employeeModel.findByIdAndUpdate(id,req.body)
    res.send(" UPDATED YOUR DATA")   
})
//4.port
app.listen(3005,()=>{
    console.log("port 3005 is running")
})


