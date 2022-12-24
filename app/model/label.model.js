const { MongoGridFSChunkError } = require('mongodb');
const mongoose = require('mongoose');
const commonSchema = require('../../config/common.schema')

const LabelSchemaDef = new mongoose.Schema({
    title:{
        title:{
            type: String,
            required: true
        },
        link: String,
        image:{
            type: String,
            require:true
        },
        status: commonSchema.statusSchema,
        type:{
            type: String,
            enum: ['brand','banner'],
            default:'banner'
        }
    }
},commonSchema.trigger)
const labelModel = monggose.model("Label",LabelSchemaDef)