const mongoose = require('mongoose')
require('dotenv').config()

const profileSchema=mongoose.Schema({
    vaccine_name:{
        type: String,
        trim: true,
        
    },
    time_of_vaccine: {
        type: String,
        trim: true,  
    },
    address:{
        type: String,
        trim: true,  
    }
})
const Profile = mongoose.model('Profile', profileSchema)
module.exports = Profile; 