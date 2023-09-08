import mongoose from "mongoose";
 
//defining schema
 
const studentSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 50 },
    fees: { type: mongoose.Decimal128, required: true, validate: v => v >= 5500.50 },   
});

//compiling schema

const studentModel = mongoose.model('student',studentSchema);

export default studentModel;