var vehicleDetail = require('../Models/vehicleDetailsModel');

module.exports = function(app){
    app.get('/api/insertSeedValuesInDB', function(req,res){
        var addDetailsQuery = [
            {
                vehicleName:'Honda CBR',
                vehicleType:'2 - wheeler',
                fuelType:'Petrol',
                year:2015,
                CC:150,
                cylinders:1,
                transmission:'Chain',
                brakes:'Disk brakes'
            },
            {
                vehicleName:'Yamaha R15',
                vehicleType:'2 - wheeler',
                fuelType:'Petrol',
                year:2015,
                CC:150,
                cylinders:1,
                transmission:'Chain',
                brakes:'Disk brakes'
            },
            {
                vehicleName:'Yamaha R3',
                vehicleType:'2 - wheeler',
                fuelType:'Petrol',
                year:2018,
                CC:300,
                cylinders:2,
                transmission:'Chain',
                brakes:'ABS'
            }
        ]
        vehicleDetail.create(addDetailsQuery,function(err,results){
            if(err) throw err;
            res.send(results);
        })
    })
}