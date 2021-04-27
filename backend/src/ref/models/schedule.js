const mongoose = require("mongoose")
const Schema = mongoose.Schema

const scheduleSchema = new Schema({
    who: {type:String, required:true},
    web: {type:String, required:true},
    calendar: {type:String, required:true},
},{})

//Schema goes inside the model....provides interface to communicate with DB collection

const Schedule = mongoose.model('Schedule',scheduleSchema)

module.exports = Schedule;

