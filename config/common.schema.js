const { string } = require('joi');
const mongoose = require('mongoose');
const NepalData = require('../config/nepal-data')
const AddressSchemaDef = new mongoose.Schema({
    state:{
        type:String,
        enum: NepalData.state

    },
    district:{
        type: String,
        emum: []
    },
    ward:{
        type: Number,
        min:1,
        max:35
    },
    location:""

})
const trigger = {
    autoCreate: true,
    autoIndex: true,
    timestamps: true
}
const created_by = {
    type: mongoose.Types.ObjectId,
    ref: "User",
    default: null
    
}
const statusSchema = {
    type: String,
    emun: ["active","inactive"],
    default:"inactive"
}

module.exports = {
    trigger,
    created_by,
    AddressSchemaDef,
    statusSchema
};
