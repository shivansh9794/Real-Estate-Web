const express = require('express');
const router=express.Router();
const Model = require('../Models/sitesModel');


router.post('/add',(req,res)=>{
    console.log(req.body);
    // res.send('responce from userRouter');
    new Model(req.body).save()
    .then((result)=>{
        res.status(200).json(result);  
    }).catch((err)=>{
        console.log(err);
    });
});


router.get('/getall',(req,res)=>{

    Model.find()
    .then((result)=>{
        res.status(200).json(result);
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err);
    });

})

router.get('/getbyname/:name',(req,res)=>{
    console.log(req.params.name);
    // res.send('responce from getbyname');
    Model.find({name:req.params.name})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.get('/getbyaddress/:address',(req,res)=>{
    console.log(req.params.address);
    // res.send('responce from getbyemail');
    Model.find({address:req.params.address})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });

});

router.get('/getbyid/:id',(req,res)=>{
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
})

router.put('/update/:id',(req,res)=>{
    Model.findByIdAndUpdate(req.params.id,req.body,{new : true})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.delete('/delete/:id',(req,res)=>{
    Model.findByIdAndDelete(req.params.id).then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})


module.exports=router;