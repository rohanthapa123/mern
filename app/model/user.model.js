const { string } = require('joi');
const mongoose = require('mongoose');
const commonSchema = require('./common.schema');



const UserSchemaDef = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        emum:['admin','customer','seller'],
        default: 'customer'
    },
    status:commonSchema.statusSchema,
    // address:{
    //     shipping: AddressSchemaDef,
    //     billing: AddressSchemaDef
    // },
    address:{
        type: String,
        default:null
    },
    image:{
        type: String
    },
    created_by:commonSchema.created_by

},commonSchema.trigger);

const userModel = mongoose.model("User",UserSchemaDef);



module.exports = userModel;