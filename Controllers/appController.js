var bodyParser = require('body-parser');
var vehicleDetail = require('../Models/vehicleDetailsModel');

module.exports=function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));

    app.get('/api/getAllVehicleDetails',function(req,res){
        vehicleDetail.find({},function(err,results){
            if (err) throw err;
            res.send(results);
        })
    });

    app.get('/api/getVehicleDetailsName/:vname', function(req,res){
        vehicleDetail.find({vehicleName:req.params.vname}, function(err,results){
            if (err) throw err;
            res.send(results);
        });
    });

    app.post('/api/addAndUpdateVehicleDetails',function(req,res){
        if(req.body.id){
            vehicleDetail.findByIdAndUpdate(req.body.id,{
                vehicleName:req.body.vehicleName,
                vehicleType:req.body.vehicleType,
                fuelType:req.body.fuelType,
                year:req.body.year,
                CC:req.body.CC,
                cylinders:req.body.cylinders,
                transmission:req.body.transmission,
                brakes:req.body.brakes},function(err,results){
                    if(err) throw err;
                    res.send('Success');
            })
        }
        else{
            var addNewVehicleDetail = vehicleDetail({
                vehicleName:req.body.vehicleName,
                vehicleType:req.body.vehicleType,
                fuelType:req.body.fuelType,
                year:req.body.year,
                CC:req.body.CC,
                cylinders:req.body.cylinders,
                transmission:req.body.transmission,
                brakes:req.body.brakes
            });
            addNewVehicleDetail.save(function(err){
                if (err) throw err;
                res.send('Success');
            })

        }
    });

    app.delete('/api/deleteVehicleDetailByID',function(req,res){
        vehicleDetail.findByIdAndDelete(req.body.id,function(err,results){
            if (err) throw err;
            res.send('Success');
        })
    });
}