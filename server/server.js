const express= require("express")
const mongoose= require("mongoose")
const cors= require("cors")
require("dotenv").config()
const app= express()

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connection succesfull"))
.catch((err)=>console.log("MongoDB connection unsuccesfull"))

const students= new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    courses:[]
})

const courses= new mongoose.Schema({
    CourseName: String,
    
})

const Students= mongoose.model("students", students)
const Course= mongoose.model("courses", courses)

app.get("/api/students", async(req, res) => {
    try {
        const students = await Students.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.put("/api/students/:id", async(req, res) => {
    try {
        const { id  } = req.params.id
        const {course}= req.body
        
       
        
        
        
        const student = new Students.findByIdAndUpdate(id,course,{course})
        
        const savedstudent = await student.save();
        res.status(201).json(savedstudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
app.get('/',()=>{
    res.status(200).json({message:"Working"})
})



app.listen(8000, () => console.log(`Server is running at http://localhost:8000`))