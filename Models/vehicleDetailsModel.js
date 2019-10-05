var mongoose = require('mongoose');

var schema = mongoose.Schema;

var vehicleDetailsSchema = new schema({
    vehicleName:String,
    vehicleType:String,
    fuelType:String,
    year:Number,
    CC:Number,
    cylinders:Number,
    transmission:String,
    brakes:String
})

var vehicleDetais = mongoose.model('vehicleDetail',vehicleDetailsSchema);

module.exports= vehicleDetais;