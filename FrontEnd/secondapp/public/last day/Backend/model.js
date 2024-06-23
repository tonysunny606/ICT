const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://tonysunny606:abcd@cluster0.bnzayoq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() =>{
    console.log("DB connected")
})
.catch(err =>console.log(err))          // error  get

let mongooSchema = mongoose.Schema

const EmployeeSchema = new mongooSchema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number,
})

var employeeModel=mongoose.model("employee",EmployeeSchema)
module.exports = employeeModel
