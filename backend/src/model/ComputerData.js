const {Schema, model} = require('mongoose')


const ComputerDataSchema = new Schema({
    uptime: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = model('ComputerData', ComputerDataSchema)
