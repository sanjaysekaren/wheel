var bodyParser = require('body-parser');
var vehicleDetail = require('../Models/vehicleDetailsModel');

module.exports=function(app){

    
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    
    app.get('/api/getAllVehicleDetails', async function(req,res){
        
         await vehicleDetail.find({},function(err,results){
            if (err) throw err;
            res.send(results);
        })
    });

    app.get('/api/getVehicleDetailsName', function(req,res){
        console.log('in api '+req.query.vname);
        vehicleDetail.find({vehicleName:req.body.vname}, function(err,results){
            if (err) throw err;
            res.send(results);
        });
    });

    app.post('/api/addAndUpdateVehicleDetails',async function(req,res){
        if(req.body.id){
            await vehicleDetail.findByIdAndUpdate(req.body.id,{...req.body},function(err,results){
                    if(err) throw err;
                    res.send('Success');
            })
        }
        else{
            var addNewVehicleDetail = vehicleDetail({...req.body});
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